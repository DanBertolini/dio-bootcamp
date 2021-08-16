import { Book } from './book.interface';
export class BookView {
    public readMoreDescription: boolean = false;

    public showEvaluations: boolean = false;
    public stars = Array(5);

    public id: number;
    public relevanceId: number;
    public title: string;
    public description: string;
    public cover: string;
    public value: number;
    public author: string;
    public genre: Array<string>;

    public isEditCart: boolean = false;

    constructor(book: Book) {
        this.id = book.id;
        this.relevanceId = book.relevanceId;
        this.title = book.title;
        this.description = book.description;
        this.cover = book.cover;
        this.value = book.value;
        this.author = book.author;
        this.genre = book.genre;
    }
}
