import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Carts';
import { BehaviorSubject, Observable } from 'rxjs';
import { Medicine } from '../shared/models/Medicine';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(medicine:Medicine):void{
    let cartItem = this.cart.items
      .find(item => item.medicine.id === medicine.id);
    if (cartItem)
      return;

    this.cart.items.push(new CartItem(medicine));
    this.setCartToLocalStorage();
  }

  removeFromCart(medicineId: string):void{
    this.cart.items = this.cart.items
      .filter(item => item.medicine.id != medicineId);
    this.setCartToLocalStorage();
  }

  changeQuantity(medicineID:string, quantity:number){
    let cartItem = this.cart.items
      .find(item => item.medicine.id === medicineID);
    if (!cartItem)
      return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.medicine.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
      .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);

    const carJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart',carJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}