import { Component, OnInit } from '@angular/core';

import { Coupon } from '../models/coupon.interface';

@Component({
    selector: 'app-promotional-coupon',
    templateUrl: './promotional-coupon.component.html',
    styleUrls: ['./promotional-coupon.component.scss']
})
export class PromotionalCouponComponent implements OnInit {

    public availableCoupons: Array<Coupon> = [
        { code: 'DIO', type: 'discount', value: 5 },
        { code: 'ANGULAR', type: 'tax-exemption' },
    ];
    public couponMessage: string = '';

    constructor() { }

    ngOnInit(): void {
    }

    public updateCoupon(couponCode: string): void {
        const coupon = this.availableCoupons.find((coupon) => coupon.code === couponCode);
        if (coupon !== undefined) {
            if (coupon.type === 'discount') {
                this.couponMessage = `Desconto de ${coupon.value}%`
            } else if (coupon.type === 'tax-exemption') {
                this.couponMessage = 'Isenção de juros nas parcelas';
            }
        }
    }

}
