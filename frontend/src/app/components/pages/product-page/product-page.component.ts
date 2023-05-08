import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHome , faArrowLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from 'src/app/shared/models/Carts';
import { Product } from 'src/app/shared/models/Product';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  icon = faHome;
  icon1 = faAngleRight;
  product!: Product;
  cart!: Cart;
  constructor(activatedRoute:ActivatedRoute,
    productService:ProductService,
    private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params) =>{
        if(params.id)
          productService.getProductById(params.id).subscribe(serverProduct => {
            this.product = serverProduct;
          });
      })
      this.cartService.getCartObservable().subscribe((cart) =>{
        this.cart = cart;
        console.log(JSON.stringify(cart));
      }) ;
    }

  ngOnInit(){

  }

  addToCart(){
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }
}
