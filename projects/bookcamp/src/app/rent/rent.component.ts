import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { BookView } from '../models/book-view.model';
import { FilterOptions } from '../models/filter-options.model';
import { GenreSelectItem } from '../models/genre-select-item.interface';
import { OrderFn } from '../models/order-fn.type';
import { OrderOptions } from '../models/order-options.enum';
import { PriceComparing } from '../models/price-comparing.enum';
import { RentBookView } from '../models/rent-book-view.model';
import { BookService } from '../services/book.service';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
    selector: 'dio-rent',
    templateUrl: './rent.component.html',
    styleUrls: ['./rent.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RentComponent implements OnInit {
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

    public isAddCartModalVisible = false;
    public filteredBooks: Array<RentBookView> = [];
    public books: Array<RentBookView> = [];

    constructor(private bookService: BookService, public shoppingCartService: ShoppingCartService, private router: Router) { }

    public ngOnInit(): void {
        this.getBooks();
    }

    public getBooks(): void {
        this.books = this.bookService.getAvailableBooksForRent().map((book) => new RentBookView(book));
        this.filteredBooks = ([] as Array<RentBookView>).concat(this.books);
    }

    public getBookDescription(bookDescription: string, seeMore: boolean): string {
        return seeMore ? bookDescription : `${bookDescription.substring(0, 500).trim()}...`;
    }

    public filterBooks(filteredBooks: Array<BookView>): void {
        this.filteredBooks = ([] as Array<RentBookView>)
            .concat(filteredBooks as Array<RentBookView>);
    }

    public orderBooks(orderFn: OrderFn): void {
        this.filteredBooks = ([] as Array<RentBookView>)
            .concat(this.filteredBooks)
            .sort(orderFn)
    }

    public addToCart(book: RentBookView): void {
        this.shoppingCartService.addRentingItem({
            ...book,
            rentDays: book.addCartForm.controls.rentDays.value,
        });
        this.isAddCartModalVisible = true;
        document.body.classList.add('modal-open');
    }

    public closeAddToCartModal(): void {
        this.isAddCartModalVisible = false;
        document.body.classList.remove('modal-open');
    }

    public goToCart(): void {
        document.body.classList.remove('modal-open');
        this.router.navigate(['shopping-cart']);
    }
}
