import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faHome , faArrowLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
import { CartService } from 'src/app/services/cart.service';
import { MedicineService } from 'src/app/services/medicine.service';
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

  constructor(activatedRoute:ActivatedRoute,
    medicineService:MedicineService,
    private cartService:CartService,
    private router:Router){
      activatedRoute.params.subscribe((params) =>{
        if(params.id)
          this.medicine = medicineService.getMedicineById(params.id);
      })
    }

  ngOnInit(){

  }

  addToCart(){
    this.cartService.addToCart(this.medicine);
    this.router.navigateByUrl('/cart-page');
  }
}
