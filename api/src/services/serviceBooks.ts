import { Service } from "typedi";
import { getMongoRepository, MongoRepository } from "typeorm";
import { Book } from "../schemas/Book";
import { CreateBookInput } from "../schemas/Inputs/Book/createBookInput";
import { UpdateBookInput } from "../schemas/Inputs/Book/updateBookInputs";

@Service()
class BookService {
  private bookRepository!: MongoRepository<Book>;

  constructor() {
    this.bookRepository = getMongoRepository(Book);
  }

  getAll = async (): Promise<Book[]> => {
    return await this.bookRepository.find();
  };

  create = async (createBookInput: CreateBookInput): Promise<Book> => {
    const book = this.bookRepository.create(createBookInput);
    return await this.bookRepository.save(createBookInput);
  };

  update = async (id: string, updateBookInput: UpdateBookInput) => {
    const persistedBook = await this.bookRepository.findOne({
      where: { _id: id },
    });
  };
}
