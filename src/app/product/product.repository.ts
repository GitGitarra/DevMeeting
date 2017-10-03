import { Product } from './product';
import { Injectable } from "@angular/core";

@Injectable()
export class ProductRepository {

    PRODUCTS: Product[];

    constructor() {
        this.PRODUCTS = [
            { id: 11, title: 'Apple', price: 1, description: 'description' },
            { id: 12, title: 'Bananna', price: 2, description: 'description' },
            { id: 13, title: 'Pinapple', price: 3, description: 'description' },
            { id: 14, title: 'Orange', price: 4, description: 'description' },
            { id: 15, title: 'Plum', price: 5, description: 'description' },
            { id: 16, title: 'Tomato', price: 6, description: 'description' },
            { id: 17, title: 'Pumpkin', price: 7, description: 'description' },
            { id: 18, title: 'Carrot', price: 8, description: 'description' },
            { id: 19, title: 'Pear', price: 9, description: 'description' },
            { id: 20, title: 'Cucumber', price: 10, description: 'description' }
        ];
    }

    getProduct(prdouctName: string): Product[] {
        const regex = new RegExp(prdouctName, 'i');

        return this.PRODUCTS.filter(product => product.title.match(regex));
    }

}