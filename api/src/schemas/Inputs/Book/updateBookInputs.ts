import "reflect-metadata";
import { Field, ID, InputType } from "type-graphql";
import { Author } from "../../Author";

@InputType()
export class UpdateBookInput {
    @Field(()=> ID)
    _id!: string

    @Field(() => String,{ nullable: true })
    firstName!: string

    @Field(() => String, { nullable: true })
    lastName!: string

    @Field(() => String, { nullable: true })
    description!: string

    @Field(() => [Author], { nullable: true })
    authors!: Author[]
}