import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHome , faArrowLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { CartService } from 'src/app/services/cart.service';
import { MedicineService } from 'src/app/services/medicine.service';
import { Cart } from 'src/app/shared/models/Carts';
import { Medicine } from 'src/app/shared/models/Medicine';
@Component({
  selector: 'app-medicine-page',
  templateUrl: './medicine-page.component.html',
  styleUrls: ['./medicine-page.component.css']
})
export class MedicinePageComponent {
  icon = faHome;
  icon1 = faAngleRight;
  medicine!: Medicine;
  cart!: Cart;
  constructor(activatedRoute:ActivatedRoute,
    medicineService:MedicineService,
    private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params) =>{
        if(params.id)
          this.medicine = medicineService.getMedicineById(params.id);
      })
      this.cartService.getCartObservable().subscribe((cart) =>{
        this.cart = cart;
        console.log(JSON.stringify(cart));
      }) ;
    }

  ngOnInit(){

  }

  addToCart(){
    this.cartService.addToCart(this.medicine);
    this.router.navigateByUrl('/cart-page');
  }
}
