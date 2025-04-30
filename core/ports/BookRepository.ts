import { Book, BookDTO } from "../entities/Book";

export interface BookRepository {
    getBookById(id: string): Promise<BookDTO>;
    getAllBooks(): Promise<BookDTO[]>;
}