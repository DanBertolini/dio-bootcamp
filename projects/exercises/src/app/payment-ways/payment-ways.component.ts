import { Component, OnInit } from '@angular/core';

import { PaymentOption } from '../models/payment-option.interface';
import { PaymentWays } from '../models/payment-ways.enum';

@Component({
    selector: 'app-payment-ways',
    templateUrl: './payment-ways.component.html',
    styleUrls: ['./payment-ways.component.scss']
})
export class PaymentWaysComponent implements OnInit {

    public selectedPaymentWay = PaymentWays.CREDIT_CARD;

    public paymentOptions: Array<PaymentOption> = [
        { display: 'Pix', value: 'pix', discount: 5 },
        { display: 'Cartão de Crédito', value: 'credit-card', discount: 0 },
        { display: 'PayPal', value: 'pay-pal', discount: 3 },
        { display: 'Boleto', value: 'boleto', discount: 2.5 },
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
