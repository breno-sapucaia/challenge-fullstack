import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { Author } from "./Author";
import { BaseSchema } from "./BaseSchema";

@Entity()
@ObjectType({ implements: BaseSchema })
export class Book extends BaseSchema {
  @Field(() => String)
  @Column({ nullable: false })
  title!: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  subTitle?: string;

  @Field(() => Author, { nullable: true })
  @Column((type) => Author)
  author!: Author;

  @Field(() => String)
  @Column({
    length: 1200,
    nullable: false,
  })
  description!: string;

  @Field(() => String)
  @Column({ nullable: true })
  imageUri?: string;
}
