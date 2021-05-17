import { ObjectId } from "mongodb";
import { Field, ID, InterfaceType } from "type-graphql";
import { CreateDateColumn, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@InterfaceType()
export abstract class BaseSchema {
  @Field(() => ID)
  @ObjectIdColumn()
  _id!: ObjectId;

  @Field(() => Date)
  @CreateDateColumn()
  createAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
