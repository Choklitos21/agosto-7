import { IsEmail, IsNotEmpty, IsString, IsNumber, IsArray } from 'class-validator';
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsNumber()
  stocks: number

  @IsArray()
  @IsNotEmpty()
  size: string[]

  @IsString()
  @IsNotEmpty()
  gender: string

  @IsNumber()
  @IsNotEmpty()
  price: number

}

