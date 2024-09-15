import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { PRODUCT_DETAIL_PAGE } from 'src/app/shared/constants/urls';
import { IProductRegister } from 'src/app/shared/interfaces/IProductRegister';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  addProductForm!: FormGroup;
  isSubmitted = false;
  constructor(private fromBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router){}

  ngOnInit(): void {
    this.addProductForm = this.fromBuilder.group({
      name: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      stars: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
      rating: ['', Validators.required],
      price: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      tags: ['', [Validators.required]]
    });

  }

  get fc() {
    return this.addProductForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.addProductForm.invalid) return;

    const fv = this.addProductForm.value;
    const product: IProductRegister = {
      name: fv.name,
      shortDescription: fv.shortDescription,
      stars: fv.stars,
      rating: fv.rating,
      price: fv.price,
      imageUrl: fv.imageUrl,
      tags: fv.tags.split(",").map((item: string) => item.trim())
    };

    this.productService.addNewProduct(product).subscribe( _ => {
      this.router.navigateByUrl(PRODUCT_DETAIL_PAGE + _.id);
    })
  }

}
