import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  firstName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  gender: string

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MinLength(8)
  password: string

  @ApiProperty()
  @IsOptional()
  is_active: boolean

}