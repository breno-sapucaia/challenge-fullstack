import { Field, ID, InputType } from "type-graphql";
import { ObjectID } from "typeorm";
import { Author } from "../../Author";

@InputType({ description: "Use this input to create an author" })
export class UpdateAuthorInput implements Partial<Author> {
  @Field(() => ID)
  _id!: ObjectID;

  @Field((type) => String, { nullable: true })
  firstName?: string;

  @Field((type) => String, { nullable: true })
  lastName?: string;
}
