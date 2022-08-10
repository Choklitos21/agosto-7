import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(userData: CreateUserDto): Promise<import("./entities/user.entity").User>;
    findById(userId: string): Promise<import("./entities/user.entity").User>;
    findAll(): Promise<import("./entities/user.entity").User[]>;
    updateUser(userId: string, userData: UpdateUserDto): Promise<import("./entities/user.entity").User>;
    deleteById(userId: string): Promise<void>;
}
