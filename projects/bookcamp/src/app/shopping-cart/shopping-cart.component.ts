import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RentBookView } from '../models/rent-book-view.model';
import { ShoppingBookView } from '../models/shopping-book-view.model';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Component({
    selector: 'dio-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingCartComponent implements OnDestroy {

    public isConfirmationModalVisible = false;

    public shoppingBooks: Observable<Array<ShoppingBookView>>;
    public rentingBooks: Observable<Array<RentBookView>>;
    public totalAmount: Observable<number>;

    public confirmationForm = new FormGroup({
        email: new FormControl(),
    });

    constructor(private shoppingCartService: ShoppingCartService, public cdr: ChangeDetectorRef, private router: Router) {
        this.shoppingBooks = this.shoppingCartService.getShoppingItens();
        this.rentingBooks = this.shoppingCartService.getRentingItens();
        this.totalAmount = this.shoppingCartService.getTotalAmount();
    }

    public updateRentDays(book: RentBookView, rentDaysInputValue: string): void {
        this.shoppingCartService.updateRentingItem({
            ...book,
            isEditCart: false,
            rentDays: parseInt(rentDaysInputValue),
        });

        this.cdr.detectChanges();
    }

    public removeRentingItem(bookId: number): void {
        this.shoppingCartService.removeRentingItem(bookId);
    }

    public updateUnits(book: ShoppingBookView, rentDaysInputValue: string): void {
        this.shoppingCartService.updateRentingItem({
            ...book,
            isEditCart: false,
            rentDays: parseInt(rentDaysInputValue),
        });

        this.cdr.detectChanges();
    }

    public removeShopItem(bookId: number): void {
        this.shoppingCartService.removeShoppingItem(bookId);
    }

    public openConfirmation(): void {
        this.isConfirmationModalVisible = true;
        document.body.classList.add('modal-open');
    }

    public closeConfirmationModal(): void {
        this.isConfirmationModalVisible = false;
        document.body.classList.remove('modal-open');
    }

    public finishShopping(): void {
        this.isConfirmationModalVisible = false;
        document.body.classList.remove('modal-open');
        this.router.navigate(['success']);
    }

    public ngOnDestroy(): void {
        this.shoppingCartService.clearCart();
    }
}
