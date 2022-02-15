import { IsEmail, IsNotEmpty } from "class-validator"

export class AdvertiserDto{
    id:number

    @IsNotEmpty()
    name:string

    @IsNotEmpty()
    @IsEmail()
    email:string

    @IsNotEmpty()
    password:string

}