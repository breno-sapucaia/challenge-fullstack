import { Length } from "class-validator";
import "reflect-metadata";
import { Field, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType()
export class CreateBookInput {
    @Field(() => String,{ nullable: false })
    firstName!: string

    @Field(() => String, { nullable: false })
    lastName!: string

    @Field(() => String, { nullable: false })
    @Length(30, 255)
    description!: string

    @Field(() => [Author], { nullable: false })
    authors!: Author[]
}