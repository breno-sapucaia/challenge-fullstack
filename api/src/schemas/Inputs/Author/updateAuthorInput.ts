import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType({ description: "Use this input to create an author" })
export class UpdateAuthorInput implements Partial<Author> {
  @Field((type) => String)
  firstName?: string;

  @Field((type) => String)
  lastName?: string;
}
