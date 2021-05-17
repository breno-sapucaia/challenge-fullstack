import { EntityRepository, MongoRepository } from "typeorm";
import { Book } from "../schemas/Book";

@EntityRepository(Book)
export class BookRepository extends MongoRepository<Book> {
  findByName = async (name: string) =>
    await this.find({
      where: {
        name: {
          $regex: new RegExp(name),
          $options: "i",
        },
      },
    });
  //TODO:
  //elastichSearchfindByName
}
