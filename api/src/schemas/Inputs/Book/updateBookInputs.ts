import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";
import { Book } from "../../Book";
import { UpdateAuthorInput } from "../Author/updateAuthorInput";

@InputType({ description: "Use this input to update the book" })
export class UpdateBookInput implements Partial<Book> {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  imageUri?: string;

  @Field(() => String, { nullable: true })
  subTitle?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => UpdateAuthorInput, { nullable: true })
  author?: Author;
}
