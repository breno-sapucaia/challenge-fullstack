import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";
import { Book } from "../../Book";
import { CreateAuthorInput } from "../Author/createAuthorInput";

@InputType({ description: "Use this input to create a new book" })
export class CreateBookInput implements Partial<Book> {
  @Field(() => String!)
  name!: string;

  @Field(() => String!)
  @Length(30, 255)
  description!: string;

  @Field((type) => CreateAuthorInput, { nullable: false })
  authors!: Author;

  @Field(() => String, { nullable: true })
  imageUri?: string;
}
