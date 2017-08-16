export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

// you could create a concrete class for this interface, if need be.
// export class Product implements IProduct {
//     constructor(public productId: number,
//                 public productName: string,
//                 public productCode: string,
//                 public releaseDate: string,
//                 public price: number,
//                 public description: string,
//                 public starRating: number,
//                 public imageUrl: string) {

//     }

//     calculateDiscount(percent: number): number {
//         return this.price - (this.price* percent/100);
//     }
// }