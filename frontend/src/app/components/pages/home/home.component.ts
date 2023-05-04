import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from 'src/app/shared/models/Medicine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  medicines:Medicine[] = [];
  constructor(private medicineService:MedicineService,
    activatedRoute:ActivatedRoute){
      activatedRoute.params.subscribe((params) =>{
        if(params.searchTerm)
          this.medicines = this.medicineService.getAllMedicineBySearchTerms(params.searchTerm);
        else if(params.tag)
          this.medicines = this.medicineService.getAllMedicineByTags(params.tag);
        else
          this.medicines = medicineService.getAll();
      })
  }

  ngOnInit(): void{

  }
}
