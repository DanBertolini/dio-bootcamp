import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PromotionalCouponService {

    private discount$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
    private exemption$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    public setDiscount(discount: number): void {
        this.discount$.next(discount);
    }

    public getDiscount(): Observable<number> {
        return this.discount$;
    }

    public setTaxesExemption(hasExemption: boolean): void {
        this.exemption$.next(hasExemption);
    }

    public hasTaxesExemption(): Observable<boolean> {
        return this.exemption$;
    }
}
