import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from "./entities/product.entity";
import { Repository } from "typeorm";
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProductDto: UpdateProductDto): string;
    remove(id: number): string;
}
