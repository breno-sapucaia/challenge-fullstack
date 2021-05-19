import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType({ description: "Use this input to create a new book" })
export class UpdateAuthorInput implements Partial<Author> {
  @Field((type) => String, { nullable: true })
  firstName?: string;

  @Field((type) => String, { nullable: true })
  lastName?: string;
}
