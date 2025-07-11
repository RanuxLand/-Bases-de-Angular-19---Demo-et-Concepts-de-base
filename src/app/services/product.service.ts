import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllProducts() :Observable<any>{
    return this.http.get("http://localhost:8044/products")
  }
  deletProduct(product : any){
    return this.http.delete("http://localhost:8044/products"+product.id)
  }

}
