import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType({ description: "Use this input to create a new book" })
export class CreateAuthorInput implements Partial<Author> {
  @Field((type) => String, { nullable: false })
  firstName!: string;

  @Field((type) => String, { nullable: false })
  lastName!: string;
}
