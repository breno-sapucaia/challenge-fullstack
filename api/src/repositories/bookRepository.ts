import { EntityRepository, Repository } from "typeorm";
import { Book } from "../schemas/Book";

@EntityRepository(Book)
class BookRepository extends Repository<Book>{}