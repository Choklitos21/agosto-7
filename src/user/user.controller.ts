import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { ApiTags } from "@nestjs/swagger";
import { UpdateUserDto } from "./dto/update-user.dto";

@ApiTags('User')
@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Post()
  async createUser(@Body() userData: CreateUserDto){
    return await this.userService.createUser(userData);
  }

  @Get(':userId')
  async findById(@Param('userId') userId: string){
    return await this.userService.findByID(userId);
  }

  @Get('')
  async findAll(){
    return await this.userService.findAll();
  }

  @Patch(':userId')
  async updateUser(
    @Param('userId') userId: string,
    @Body() userData: UpdateUserDto){

    return await this.userService.updateUser(userId, userData);

  }

  @Delete(':userId')
  async deleteById(@Param('userId') userId: string){
    return await this.userService.deleteById(userId);
  }



}
