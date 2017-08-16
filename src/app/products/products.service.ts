import { Injectable } from "@angular/core";
import { IProduct } from './product'
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'

@Injectable()
export class ProductService {
    private _productsUrl = './api/products/products.json';

    constructor(private _http: HttpClient) {
    }

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productsUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}