import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<import("./entities/product.entity").Product>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductDto: UpdateProductDto): string;
    remove(id: string): string;
}
