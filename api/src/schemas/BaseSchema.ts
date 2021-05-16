import { Field, ID } from "type-graphql";
import { CreateDateColumn, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";


export abstract class BaseSchema {

    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;
    
    @Field(() => Date)
    @CreateDateColumn()
    createAt!: Date

    @Field(()=> Date)
    @UpdateDateColumn()
    updatedAt!: Date
}