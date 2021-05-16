import { EntityRepository, Repository } from "typeorm";
import { Book } from "../schemas/Book";

@EntityRepository(Book)
class BookRepository extends Repository<Book> {
  findByName = async (name: string) =>
    await this.find({
      where: {
        name: {
          $regex: new RegExp(name),
          $option: "i",
        },
      },
    });
  //TODO:
  //elastichSearchfindByName
}
