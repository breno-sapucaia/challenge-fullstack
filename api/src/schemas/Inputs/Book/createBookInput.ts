import { Length } from "class-validator";
import "reflect-metadata";
import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType()
export class CreateBookInput {
  @Field(() => String!)
  firstName!: string;

  @Field(() => String!)
  lastName!: string;

  @Field(() => String!)
  @Length(30, 255)
  description!: string;

  @Field(() => [Author!], { nullable: false })
  authors!: Author[];
}
