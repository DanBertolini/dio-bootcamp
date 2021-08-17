import { Component, OnInit } from '@angular/core';

import { Coupon } from '../models/coupon.interface';
import { PromotionalCouponService } from '../services/promotional-coupon.service';

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

    constructor(private promotionalCouponService: PromotionalCouponService) { }

    ngOnInit(): void {
        this.couponMessage = '';
        this.promotionalCouponService.setDiscount(0);
        this.promotionalCouponService.setTaxesExemption(false);
    }

    public updateCoupon(couponCode: string): void {
        const coupon = this.availableCoupons.find((coupon) => coupon.code === couponCode);
        if (coupon !== undefined) {
            if (coupon.type === 'discount' && coupon.value !== undefined) {
                this.couponMessage = `Desconto de ${coupon.value}%`;
                this.promotionalCouponService.setDiscount(coupon.value);
            } else if (coupon.type === 'tax-exemption') {
                this.couponMessage = 'Isenção de juros nas parcelas';
                this.promotionalCouponService.setTaxesExemption(true);
            }
        } else {
            this.couponMessage = '';
            this.promotionalCouponService.setDiscount(0);
            this.promotionalCouponService.setTaxesExemption(false);
        }
    }

}
