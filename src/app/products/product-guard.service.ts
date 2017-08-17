import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";

@Injectable()
export class ProductGuardService implements CanActivate{
  variable: string = 'hello'
  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path; //url is made up of two segments; 1:products, 2:10 because the url is products/10
    if( isNaN(id) || id < 1 ) {
      alert("Invalid Product Id");
      this._router.navigate(['/products']);
      return false;
    }
    return true;
  }

  // This shows the different parameters that can be passed in by default and the different possible return values.
  // These seem more important when you need authentication and things of that nature
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
  //   throw new Error("Method not implemented.");
  // }
}
