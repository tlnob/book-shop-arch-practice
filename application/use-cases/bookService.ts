import { Book, BookDTO } from "../../core/entities/Book";
import { BookRepository } from "../../core/ports/BookRepository";

export class BookService {
    constructor(private readonly bookRepository: BookRepository) {
        this.bookRepository = bookRepository;
    }

    async getBookById(id: string): Promise<BookDTO> {
        if (!id) throw new Error("ID is required");
        return await this.bookRepository.getBookById(id);
    }

    async getAllBooks(): Promise<BookDTO[]> {
        return await this.bookRepository.getAllBooks();
    }
}
