import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";
import { Book } from "../../Book";
import { CreateAuthorInput } from "../Author/createAuthorInput";

@InputType({ description: "Use this input to create a new book" })
export class CreateBookInput implements Partial<Book> {
  @Field(() => String!)
  title!: string;

  @Field(() => String, { nullable: true })
  subTitle?: string;

  @Field(() => String!)
  description!: string;

  @Field((type) => CreateAuthorInput, { nullable: false })
  author!: Author;

  @Field(() => String, { nullable: true })
  imageUri?: string;
}
