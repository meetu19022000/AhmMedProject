import { Medicine } from "./Medicine";

export class CartItem{
  constructor(public medicine:Medicine){}
  quantity:number = 1;
  price: number = this.medicine.price;
}
