export class Book {
  constructor(
    public id: string,
    public title: string,
    public author: string,
    public year: number,
    public genre: string,
    public summary: string

  ) {}

  getTitle(): string {
    return this.title;
  }

  getAuthor(): string {
    return this.author;
  }
}

export interface BookDTO {
  id: string;
  title: string;
  author?: string;
  year?: number;
  genre?: string;
  summary?: string;
  createdAt: Date;
  updatedAt: Date;
}