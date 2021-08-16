import { FormControl, FormGroup } from '@angular/forms';
import { BookView } from './book-view.model';
import { Book } from './book.interface';

export class ShoppingBookView extends BookView {
    public units: number = 0;
    public addCartForm = new FormGroup({
        units: new FormControl(1),
    });

    constructor(book: Book) {
        super(book);
    }
}
