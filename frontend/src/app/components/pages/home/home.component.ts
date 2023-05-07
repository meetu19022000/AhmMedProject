import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products:Product[] = [];
  constructor(private productService:ProductService,
    activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe((params) =>{
        if(params.searchTerm)
          this.products = this.productService.getAllProductBySearchTerms(params.searchTerm);
        else if(params.tag)
          this.products = this.productService.getAllProductByTags(params.tag);
        else
          this.products = productService.getAll();
      })
  }

  ngOnInit(): void{

  }
}
