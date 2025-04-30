import { PrismaClient } from "@prisma/client";
import { Book, BookDTO } from "../../core/entities/Book";
import { BookRepository } from "../../core/ports/BookRepository";



export class DBRepository implements BookRepository {
    constructor(public client: PrismaClient) {
        this.client = client 
    }

    async terminateConnection() {
        await this.client.$disconnect();
    }

    async getBookById(id: string): Promise<BookDTO> {
        const book = await this.client.book.findUnique({
            where: {
                id,
            },
        }) 

        return book as BookDTO

    }

    async getAllBooks(): Promise<BookDTO[]> {
        const books = await this.client.book.findMany();
        return books as BookDTO[]
    }

}
