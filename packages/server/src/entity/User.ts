import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, BaseEntity} from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql"
import * as argon2 from "argon2"
import { IsEmail, MinLength, MaxLength, IsString } from "class-validator";

@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID!)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String!)
    @Column("text")
    firstName: string;

    @Field(() => String!)
    @Column("text")
    lastName: string;

    @Field(() => String!)
    @Column("text")
    email: string;

    @Field(() => String!)
    @Column("text")
    password: string
    
    @BeforeInsert()
    async hashPasswordBeforeInsert() {
        this.password = await argon2.hash(this.password, { hashLength: 12 });
    }
}

@InputType()
export class RegisterInputs {
    
    @Field()
    @IsEmail()
    @MinLength(3)
    @MaxLength(255)
    email: string;

    @Field()
    @IsString()
    @MinLength(6)
    @MaxLength(255)
    password: string;

    @Field()
    @IsString()
    firstName: string

    @Field()
    @IsString()
    lastName: string
}

@ObjectType()
export class LoginResponse {
    @Field(() => Boolean)
    ok: boolean

    @Field(() => String)
    token: string

    @Field(() => String)
    refreshToken: string
}