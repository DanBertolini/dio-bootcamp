import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookView } from '../models/book-view.model';

import { FilterOptions } from '../models/filter-options.model';
import { GenreSelectItem } from '../models/genre-select-item.interface';
import { OrderFn } from '../models/order-fn.type';
import { OrderOptions } from '../models/order-options.enum';
import { PriceComparing } from '../models/price-comparing.enum';
import { ShoppingBookView } from '../models/shopping-book-view.model';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

    @Input() public books: Array<BookView> = [];
    @Output() filter: EventEmitter<Array<BookView>> = new EventEmitter<Array<BookView>>();
    @Output() order: EventEmitter<OrderFn> = new EventEmitter<OrderFn>();

    public filterForm = new FormGroup({
        title: new FormControl(),
        priceComparing: new FormControl(PriceComparing.GREATER_EQUAL),
        priceStart: new FormControl(),
        priceEnd: new FormControl(),
        genre: new FormControl([]),
    });

    public genreOptions: Array<GenreSelectItem> = [];

    public priceComparingOptions = [PriceComparing.GREATER_EQUAL, PriceComparing.LOWER_EQUAL, PriceComparing.BETWEEN];

    public isFilterOptionVisible: boolean | undefined = undefined;
    public filterOptions = new FilterOptions();

    public isOrderOptionsVisible: boolean | undefined = undefined;
    public orderBy = OrderOptions.RELEVANT;
    public orderOptions = [OrderOptions.RELEVANT, OrderOptions.LOWER_PRICE, OrderOptions.GREATER_PRICE];

    constructor() { }

    ngOnInit(): void {
        this.getGenreOptions();
        this.filterForm.patchValue({
            genre: this.genreOptions.map((genre) => genre.value),
        });
        this.setOrderBy(OrderOptions.RELEVANT, false);
        this.listenClickOutOrderOptions();
    }

    // #region Filtro

    public toggleFilterOptions(): void {
        this.isFilterOptionVisible = !this.isFilterOptionVisible;
    }

    public applyFilter(): void {
        this.filterOptions.title = this.filterForm.controls.title.value;
        this.filterOptions.priceComparing = this.filterForm.controls.priceComparing.value;
        this.filterOptions.priceStart = this.filterForm.controls.priceStart.value;
        this.filterOptions.priceEnd = this.filterForm.controls.priceEnd.value;
        this.filterOptions.genre = this.filterForm.controls.genre.value;

        this.filter.emit(([] as Array<BookView>)
            .concat(this.books)
            .filter(this.titleFilter.bind(this))
            .filter(this.priceFilter.bind(this))
            .filter(this.genreFilter.bind(this)));

        this.isFilterOptionVisible = false;
    }

    private titleFilter(book: BookView): boolean {
        return !this.isFilterValid(this.filterOptions.title)
            ? true
            : book.title.toLowerCase().includes(this.filterOptions.title.toLowerCase());
    }

    private priceFilter(book: BookView): boolean {
        const hasToCheckStartPrice =
            this.filterOptions.priceComparing === PriceComparing.GREATER_EQUAL ||
            this.filterOptions.priceComparing === PriceComparing.BETWEEN;
        const isPriceStartValid =
            !this.isFilterValid(this.filterOptions.priceStart) || !hasToCheckStartPrice
                ? true
                : book.value >= this.filterOptions.priceStart;

        const hasToCheckEndPrice =
            this.filterOptions.priceComparing === PriceComparing.LOWER_EQUAL ||
            this.filterOptions.priceComparing === PriceComparing.BETWEEN;
        const isPriceEndValid =
            !this.isFilterValid(this.filterOptions.priceEnd) || !hasToCheckEndPrice ? true : book.value <= this.filterOptions.priceEnd;

        return isPriceStartValid && isPriceEndValid;
    }

    private genreFilter(book: BookView): boolean {
        return book.genre.some((genre) => {
            return this.filterOptions.genre.includes(genre);
        });
    }

    private isFilterValid(value: unknown): boolean {
        return value !== '' && value !== undefined && value !== null && value !== NaN;
    }

    public onGenreSelectChange(genreItem: GenreSelectItem): void {
        const currentGenres = this.filterForm.get('genre')?.value;
        const newGenres = genreItem.selected
            ? currentGenres.concat([genreItem.value])
            : currentGenres.filter((genre: string) => genre !== genreItem.value);
        this.filterForm.patchValue({
            genre: newGenres,
        });
    }

    private listenClickOutOrderOptions(): void {
        window.addEventListener('click', (event) => {
            const isOrderElement = event.composedPath().find((el: Partial<HTMLElement>) => {
                return Array.from(el.classList || []).includes('order');
            });
            if (!isOrderElement && this.isOrderOptionsVisible !== undefined) {
                this.isOrderOptionsVisible = false;
            }
        });
    }

    private getGenreOptions(): void {
        this.genreOptions = this.books
            .map((book) => book.genre)
            .reduce((previousValue, currentValue) => {
                const genres = currentValue.concat(previousValue);
                return genres.filter((genre, index) => genres.indexOf(genre) === index);
            }, [])
            .map((genre) => ({ value: genre, selected: true }));
    }

    //#endregion Filtro

    //#region Ordenação

    public toggleOrderOptions(): void {
        this.isOrderOptionsVisible = !this.isOrderOptionsVisible;
    }

    public setOrderBy(orderOption: OrderOptions, toggleOptions = true): void {
        this.orderBy = orderOption;
        switch (this.orderBy) {
            case OrderOptions.RELEVANT:
                this.order.emit((bookA: BookView, bookB: BookView) =>
                    (bookA.relevanceId > bookB.relevanceId ? 1 : -1));
                break;
            case OrderOptions.LOWER_PRICE:
                this.order.emit((bookA: BookView, bookB: BookView) =>
                    (bookA.value > bookB.value ? 1 : -1));
                break;
            case OrderOptions.GREATER_PRICE:
                this.order.emit((bookA: BookView, bookB: BookView) =>
                    (bookA.value < bookB.value ? 1 : -1));
                break;
        }

        if (toggleOptions) {
            this.isOrderOptionsVisible = false;
        }
    }

    //#endregion Ordenação
}
