import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { FormControl } from "@angular/forms";
import { ProductRepository } from "./product.repository";
//import { PRODUCTS } from './mock-products';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
    products: Product[];
   
    public myInput = new FormControl();

    constructor(private productRepository: ProductRepository) {
        this.myInput.valueChanges.subscribe(value => this.getProduct(value));
    }

    ngOnInit() {
        this.getProduct("");
    }

    getProduct(prdouctName: string): void {
        this.products = this.productRepository.getProduct(prdouctName);
    }

}

