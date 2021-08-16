export interface Book {
    id: number;
    relevanceId: number;
    title: string;
    description: string;
    cover: string;
    value: number;
    author: string;
    genre: Array<string>;
    availableForRenting: boolean;
}
