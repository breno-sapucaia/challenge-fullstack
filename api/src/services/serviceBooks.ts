import { ObjectId } from "mongodb";
import { Service } from "typedi";
import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repositories/bookRepository";
import { Book } from "../schemas/Book";
import { CreateBookInput } from "../schemas/Inputs/Book/createBookInput";
import { UpdateBookInput } from "../schemas/Inputs/Book/updateBookInputs";

@Service()
export default class BookService {
  private bookRepository!: BookRepository;

  constructor() {
    this.bookRepository = getCustomRepository(BookRepository, "mongodb");
  }
  findByName = async (name: string): Promise<Book[]> =>
    await this.bookRepository.findByName(name);

  findById = async (_id: string): Promise<Book> => {
    const book = await this.bookRepository.findOne({
      where: {
        _id,
      },
    });
    if (!book) throw new Error(`The Book with id: ${_id} doesn't exists! 😢`);
    return book;
  };
  findAll = async (): Promise<Book[]> => await this.bookRepository.find();

  create = async (createBookInput: CreateBookInput): Promise<Book> => {
    const book = this.bookRepository.create(createBookInput);
    return await this.bookRepository.save(book);
  };

  update = async (
    _id: string,
    updateBookInput: UpdateBookInput
  ): Promise<Book> => {
    const { lastErrorObject, value } =
      await this.bookRepository.findOneAndUpdate({ _id }, updateBookInput, {
        returnOriginal: false,
      });
    if (!lastErrorObject) return value as Book;
    else {
      console.log(lastErrorObject);
      throw new Error(lastErrorObject);
    }
  };

  delete = async (_id: string): Promise<boolean> => {
    const result = await this.bookRepository.findOneAndDelete({
      _id: new ObjectId(_id),
    });
    return !!result.value;
  };
}
