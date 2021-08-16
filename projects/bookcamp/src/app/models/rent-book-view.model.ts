import { FormControl, FormGroup } from '@angular/forms';
import { BookView } from './book-view.model';
import { Book } from './book.interface';

export class RentBookView extends BookView {
    public rentDays: number = 0;
    public addCartForm = new FormGroup({
        rentDays: new FormControl(1),
    });

    constructor(book: Book) {
        super(book);
        this.value = this.value * 0.05;
    }
}
