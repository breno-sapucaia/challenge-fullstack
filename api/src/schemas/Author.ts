import { Field, ObjectType } from "type-graphql";
import { Column, Entity } from "typeorm";
import { BaseSchema } from "./BaseSchema";

@Entity()
@ObjectType({ implements: BaseSchema })
class Author extends BaseSchema {
  @Field(() => String)
  @Column()
  firstName!: string;

  @Field(() => String)
  @Column()
  lastName!: string;

  @Field(() => String)
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}

export { Author };
