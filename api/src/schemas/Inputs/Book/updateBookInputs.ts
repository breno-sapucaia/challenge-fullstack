import { Field, ID, InputType } from "type-graphql";
import { Author } from "../../Author";
import { UpdateAuthorInput } from "../Author/updateAuthorInput";

@InputType({ description: "Use this input to update the book" })
export class UpdateBookInput {
  @Field(() => ID)
  _id!: string;

  @Field(() => String, { nullable: true })
  firstName!: string;

  @Field(() => String, { nullable: true })
  lastName!: string;

  @Field(() => String, { nullable: true })
  description!: string;

  @Field(() => [UpdateAuthorInput], { nullable: true })
  authors!: Author[];
}
