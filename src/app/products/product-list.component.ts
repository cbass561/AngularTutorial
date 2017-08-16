import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';

@Component({
    //selector: 'pm-products', a selector is not needed if you are routing to the component
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    private _listFilter: string;
    
    panelTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) {
    }

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
                },
                error => this.errorMessage = <any> error);
    }

    performFilter(filter: string): IProduct[] {
        filter = filter.toLocaleLowerCase();
        // TODO - THIS IS THE FAT ARROW SYNTAX, IN ES6, THAT YOU SHOULD LEARN FOR BLUVISION
        return this.products.filter((product: IProduct) =>
            product.productName.toLocaleLowerCase().indexOf(filter) != -1);
    }

    onRatingClicked(message: string): void {
        this.panelTitle = "Product List: " + message;
    }
}