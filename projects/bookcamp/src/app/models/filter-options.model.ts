import { PriceComparing } from './price-comparing.enum';

export class FilterOptions {
    private _title = '';
    private _priceComparing: PriceComparing = PriceComparing.GREATER_EQUAL;
    private _priceStart: number = 0.0;
    private _priceEnd: number = 0.0;
    private _genre: Array<string> = [];

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get priceComparing(): PriceComparing {
        return this._priceComparing;
    }

    set priceComparing(value: PriceComparing) {
        this._priceComparing = value;
    }

    get priceStart(): number {
        return this._priceStart;
    }

    set priceStart(value: string | number) {
        this._priceStart = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;
    }

    get priceEnd(): number {
        return this._priceEnd;
    }

    set priceEnd(value: string | number) {
        this._priceEnd = typeof value === 'string' ? parseFloat(value.replace(',', '.')) : value;
    }

    get genre(): Array<string> {
        return ([] as Array<string>).concat(this._genre);
    }

    set genre(value: Array<string>) {
        this._genre = ([] as Array<string>).concat(value);
    }
}
