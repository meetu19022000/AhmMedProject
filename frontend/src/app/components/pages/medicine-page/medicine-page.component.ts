import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faHome , faArrowLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons'
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
    medicineService:MedicineService){
      activatedRoute.params.subscribe((params) =>{
        if(params.id)
          this.medicine = medicineService.getMedicineById(params.id);
      })
    }

  ngOnInit(){

  }
}
