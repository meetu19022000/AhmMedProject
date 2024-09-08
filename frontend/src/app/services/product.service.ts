import { Injectable } from '@angular/core';
import { Product } from '../shared/models/Product';
import { sample_products, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAG_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL, PRODUCT_NEW_ADD_URL } from '../shared/constants/urls';
import { IProductRegister } from '../shared/interfaces/IProductRegister';
import { ToastrService } from 'ngx-toastr';

const PRODUCT_KEY = 'Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private productSubject = new BehaviorSubject<Product>(this.getProductFromLocalStorage());
  public productObservable:Observable<Product>;
  constructor(private http:HttpClient,
              private toastrService:ToastrService) {
    this.productObservable = this.productSubject.asObservable();
               }

  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductBySearchTerms(searchTerm:string){
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllProductByTags(tag:string):Observable<Product[]>{
    return tag === "All"
      ? this.getAll()
      : this.http.get<Product[]>(PRODUCTS_BY_TAG_URL + tag);
  }

  getProductById(Id:string):Observable<Product>{
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + Id);
  }

  addNewProduct(productRegitser: IProductRegister): Observable<Product>{
    return this.http.post<Product>(PRODUCT_NEW_ADD_URL, productRegitser).pipe(
      tap({
        next: (product) => {
          this.setProductToLocalStorage(product);
          this.productSubject.next(product);
          this.toastrService.success(
            `${product.name} added successfully`
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error,
              'Product addition Failed')
        }
        
      })
    );
  }

  private setProductToLocalStorage(product: Product){
    localStorage.setItem(PRODUCT_KEY, JSON.stringify(product));
  }

  private getProductFromLocalStorage(): Product {
    const productJson = localStorage.getItem(PRODUCT_KEY);
    if (productJson) return JSON.parse(productJson) as Product;
    return new Product();
  }
}
