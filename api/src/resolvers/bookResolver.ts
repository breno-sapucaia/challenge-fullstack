import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Service } from "typedi";
import { Book } from "../schemas/Book";
import { CreateBookInput } from "../schemas/Inputs/Book/createBookInput";
import { UpdateBookInput } from "../schemas/Inputs/Book/updateBookInputs";
import BookService from "../services/serviceBooks";

@Service<BookService>()
@Resolver((of) => Book)
class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query((returns) => [Book!]!, { nullable: true })
  async getBooks(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Query((returns) => Book!)
  async getBook(@Arg("_id") _id: string): Promise<Book> {
    return await this.bookService.findById(_id);
  }

  @Mutation((returns) => Book)
  async createBook(
    @Arg("createBookInput") createBookInput: CreateBookInput
  ): Promise<Book> {
    return await this.bookService.create(createBookInput);
  }

  @Mutation((returns) => Boolean)
  async updateBook(
    @Arg("_id") id: string,
    @Arg("updateBookInput") updateBookInput: UpdateBookInput
  ): Promise<Book> {
    return await this.bookService.update(id, updateBookInput);
  }
}
export { BookResolver };