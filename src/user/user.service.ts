import { BadGatewayException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {
  }

  //Create a User
  async createUser(userData: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(userData)

    return await this.userRepository.save(user)
  }

  //Find a User By Id
  async findByID(id: string): Promise<User> {
    const user = await this.userRepository.findOne({where: {id} })

    if(!user) {
      throw new NotFoundException('User not found')
    }

    return user
  }

  //Find all Users
  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  //Update a User
  async updateUser(id: string, userData: UpdateUserDto): Promise<User> {

    const user = await this.userRepository.findOne({where: {id} })

    if (!user) {
      throw new BadGatewayException('User not found')
    }

    const updateUser = Object.assign(user, userData)

    return await this.userRepository.save(updateUser)

  }

  async deleteById(userId: string) {
    await this.userRepository.delete(userId)
  }

}
