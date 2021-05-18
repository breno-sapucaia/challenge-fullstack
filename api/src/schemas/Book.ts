import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Author } from "./Author";
import { BaseSchema } from "./BaseSchema";

@Entity()
@ObjectType({ implements: BaseSchema })
export class Book extends BaseSchema {
  @Field(() => String)
  @Column({ nullable: false })
  name!: string;

  @Field(() => Author, { nullable: true })
  @Column((type) => Author)
  authors!: Author;

  @Field(() => String)
  @Column({
    length: 255,
    nullable: false,
  })
  description!: string;
}
