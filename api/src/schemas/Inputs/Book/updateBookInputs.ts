import { Field, ID, InputType } from "type-graphql";
import { ObjectID } from "typeorm";
import { Author } from "../../Author";
import { UpdateAuthorInput } from "../Author/updateAuthorInput";

@InputType({ description: "Use this input to update the book" })
export class UpdateBookInput {
  @Field(() => ID)
  _id!: ObjectID;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => UpdateAuthorInput, { nullable: true })
  author?: Author;

  @Field(() => String, { nullable: true })
  uri?: string;
}
