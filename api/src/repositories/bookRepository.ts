import { EntityRepository, MongoRepository } from "typeorm";
import { Book } from "../schemas/Book";

@EntityRepository(Book)
export class BookRepository extends MongoRepository<Book> {
  findByName = async (term: string, page: number = 0) =>
    await this.find({
      where: {
        title: {
          $regex: new RegExp(term),
          $options: "i",
        },
      },
      take: 9,
      skip: 9 * page,
    });
  //TODO:
  //elastichSearchfindByName
}
