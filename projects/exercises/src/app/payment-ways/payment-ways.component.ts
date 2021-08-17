import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { PaymentOption } from '../models/payment-option.interface';
import { PaymentWays } from '../models/payment-ways.enum';

@Component({
    selector: 'app-payment-ways',
    templateUrl: './payment-ways.component.html',
    styleUrls: ['./payment-ways.component.scss']
})
export class PaymentWaysComponent implements OnInit {

    @Output() paymentWayChange: EventEmitter<PaymentOption> = new EventEmitter<PaymentOption>();

    public selectedPaymentWay = PaymentWays.CREDIT_CARD;

    public paymentOptions: Array<PaymentOption> = [
        { display: 'Pix', value: 'pix', discount: 5 },
        { display: 'Cartão de Crédito', value: 'credit-card', discount: 0 },
        { display: 'PayPal', value: 'pay-pal', discount: 3 },
        { display: 'Boleto', value: 'boleto', discount: 2.5 },
    ];

    constructor() { }

    ngOnInit(): void {
        this.updatePaymentWay();
    }

    public updatePaymentWay(): void {
        const paymentOption = this.paymentOptions.find((option) => option.value === this.selectedPaymentWay);
        if (paymentOption !== undefined) {
            this.paymentWayChange.emit(paymentOption);
        }
    }

}
