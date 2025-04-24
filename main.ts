import express, { Express, Request, Response } from 'express';
import { BookService } from './application/use-cases/bookService';
import { DBRepository } from './infra/repository/DBRepository';

const app: Express = express();
const port = 3000;

const bookRepository = new DBRepository({});
const bookService = new BookService(bookRepository);

app.get('/book/:id', (req: Request, res: Response) => {
  bookService.getBookById(req.params.id).then((book) => {
    res.send(book);
  }).catch(() => {
    res.status(500);
  })
});

app.get('/books', (req: Request, res: Response) => {
  bookService.getAllBooks()
    .then((books) =>  res.send(books))
    .catch(() => res.status(500))
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});