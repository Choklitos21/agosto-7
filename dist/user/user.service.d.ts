import { Repository } from "typeorm";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    createUser(userData: CreateUserDto): Promise<User>;
    findByID(id: string): Promise<User>;
    findAll(): Promise<User[]>;
    updateUser(id: string, userData: UpdateUserDto): Promise<User>;
    deleteById(userId: string): Promise<void>;
}
