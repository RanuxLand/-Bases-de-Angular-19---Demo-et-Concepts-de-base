import {Component, OnInit} from '@angular/core';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-product',
  imports: [

  ],
  standalone : true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements  OnInit{
 products : any;


 constructor(private productService :ProductService) {
 }
ngOnInit():void{
   this.getAllProducts();
  }

  getAllProducts():void{
     this.productService.getAllProducts().subscribe({
       next: resp => {
         this.products = resp;
       },
       error : err => {
         console.log(err)
       }
       }

     );
  }


  handleDelete(product:any) : void{
   let v = confirm('etes vous sur de vouloir supprimer? ');
   if(v==true){
     this.productService.deletProduct(product).subscribe({
       next : value => {

         this.getAllProducts();
       },
       error : err =>{
         console.log(err)
       }
     });

   }

  }
}
