import { BookDTO } from "../../core/entities/Book";
import { BookRepository } from "../../core/ports/BookRepository";

export class DBRepository implements BookRepository {
    constructor(public mockConnection: any) { }

    async getBookById(id: string): Promise<BookDTO> {
        return {
            id,
            title: "Sample Book",
        }
    }

    async getAllBooks(): Promise<BookDTO[]> {
        return [
            {
                id: "1",
                title: "Sample Book 1",
            },
            {
                id: "2",
                title: "Sample Book 2",
            }
        ]
    }


}
