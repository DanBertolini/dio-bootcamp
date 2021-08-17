export interface Coupon {
    code: string;
    type: 'discount' | 'tax-exemption';
    value?: number;
}
