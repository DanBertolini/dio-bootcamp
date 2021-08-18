import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { BookService } from '../services/book.service';

import { FilterOptions } from '../models/filter-options.model';
import { FormControl, FormGroup } from '@angular/forms';
import { PriceComparing } from '../models/price-comparing.enum';
import { GenreSelectItem } from '../models/genre-select-item.interface';
import { OrderOptions } from '../models/order-options.enum';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { Router } from '@angular/router';
import { ShoppingBookView } from '../models/shopping-book-view.model';
import { OrderFn } from '../models/order-fn.type';
import { BookView } from '../models/book-view.model';

@Component({
    selector: 'dio-shopping',
    templateUrl: './shopping.component.html',
    styleUrls: ['./shopping.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingComponent implements OnInit {

    public isAddCartModalVisible = false;
    public filteredBooks: Array<ShoppingBookView> = [];
    public books: Array<ShoppingBookView> = [];

    constructor(private bookService: BookService, public shoppingCartService: ShoppingCartService, private router: Router) { }

    public ngOnInit(): void {
        this.getBooks();
    }

    public filterBooks(filteredBooks: Array<BookView>): void {
        this.filteredBooks = ([] as Array<ShoppingBookView>)
            .concat(filteredBooks as Array<ShoppingBookView>);
    }

    public orderBooks(orderFn: OrderFn): void {
        this.filteredBooks = ([] as Array<ShoppingBookView>)
            .concat(this.filteredBooks)
            .sort(orderFn)
    }

    public getBooks(): void {
        this.books = this.bookService.getAvailableBooksForShopping().map((book) => new ShoppingBookView(book));
        this.filteredBooks = ([] as Array<ShoppingBookView>).concat(this.books);
    }

    public getBookDescription(bookDescription: string, seeMore: boolean): string {
        return seeMore ? bookDescription : `${bookDescription.substring(0, 500).trim()}...`;
    }

    public addToCart(book: ShoppingBookView): void {
        this.shoppingCartService.addShoppingItem({
            ...book,
            units: book.addCartForm.controls.units.value,
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
