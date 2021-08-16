import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { RentBookView } from '../models/rent-book-view.model';
import { ShoppingBookView } from '../models/shopping-book-view.model';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    private shoppingBooks: Array<ShoppingBookView> = [];
    private rentingBooks: Array<RentBookView> = [];

    private cartChanges$: BehaviorSubject<void | null> = new BehaviorSubject<void | null>(null);
    private cartItemQuantity$: BehaviorSubject<number> = new BehaviorSubject(0);

    constructor() {
        this.cartChanges$.next();
    }

    public addShoppingItem(bookView: ShoppingBookView): void {
        this.shoppingBooks.push(bookView);
        this.updateCart();
    }

    public getShoppingItens(): Observable<Array<ShoppingBookView>> {
        return this.cartChanges$.pipe(map(() => this.shoppingBooks));
    }

    public updateShoppingItem(bookRenting: ShoppingBookView): void {
        this.shoppingBooks = this.shoppingBooks.map((book) => {
            if (book.id === bookRenting.id) {
                return bookRenting;
            }

            return book;
        });
        this.updateCart();
    }

    public removeShoppingItem(bookId: number): void {
        this.shoppingBooks = this.shoppingBooks.filter((book) => book.id !== bookId);
        this.updateCart();
    }

    public addRentingItem(rentBookView: RentBookView): void {
        this.rentingBooks.push(rentBookView);
        this.updateCart();
    }

    public getRentingItens(): Observable<Array<RentBookView>> {
        return this.cartChanges$.pipe(map(() => this.rentingBooks));
    }

    public updateRentingItem(bookRenting: RentBookView): void {
        this.rentingBooks = this.rentingBooks.map((book) => {
            if (book.id === bookRenting.id) {
                return bookRenting;
            }

            return book;
        });
        this.updateCart();
    }

    public removeRentingItem(bookId: number): void {
        this.rentingBooks = this.rentingBooks.filter((book) => book.id !== bookId);
        this.updateCart();
    }

    public getQuantityOfItens(): Observable<number> {
        return this.cartItemQuantity$.asObservable();
    }

    public getQuantityOfItensAsync(): number {
        return this.shoppingBooks.length + this.rentingBooks.length;
    }

    public getTotalAmount(): Observable<number> {
        return this.cartChanges$.pipe(
            map(() => {
                const totalShopping = this.shoppingBooks
                    .map((book) => book.value * book.units)
                    .reduce((prevValue: number, currentValue: number) => {
                        return prevValue + currentValue;
                    }, 0);
                const totalRenting = this.rentingBooks
                    .map((book) => book.value * book.rentDays)
                    .reduce((prevValue: number, currentValue: number) => {
                        return prevValue + currentValue;
                    }, 0);
                return totalShopping + totalRenting;
            }),
        );
    }

    public isAlreadyInCart(bookId: number): boolean {
        return this.shoppingBooks.some((book) => book.id === bookId) || this.rentingBooks.some((book) => book.id === bookId);
    }

    public clearCart(): void {
        this.shoppingBooks = [];
        this.rentingBooks = [];
        this.updateCart();
    }

    private updateCart(): void {
        this.cartChanges$.next();
        this.cartItemQuantity$.next(this.shoppingBooks.length + this.rentingBooks.length);
    }
}
