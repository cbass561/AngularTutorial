import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    // This is how you get the url parameter 'id', there are alternatives way that might be worth investigating
    let id = +this._route.snapshot.paramMap.get('id');
    // The let is used to create a block variable, not sure what that means but it has something to do with scope
    // The + is a shortcut to cast a string to a number
    this.pageTitle += `: ${id}`;
  }

  onBack(): void {
    this._router.navigate(['/products'])
  }
}
