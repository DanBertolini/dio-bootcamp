import { BookView } from "./book-view.model";

export type OrderFn = (bookA: BookView, bookB: BookView) => number
