import { Component } from '@angular/core';
import { faAngleRight, faHome, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Cart } from 'src/app/shared/models/Carts';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  icon = faHome; icon1 = faAngleRight; icon2 = faTrash;
  constructor(private cartService:CartService){
    this.cartService.getCartObservable().subscribe((cart) =>{
      this.cart = cart;
    }) ;
  }

  ngOnInit(): void{

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.medicine.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.medicine.id,quantity);
  }
}
