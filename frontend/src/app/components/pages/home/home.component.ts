import { Component } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Medicine } from 'src/app/shared/models/Medicine';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  medicines:Medicine[] = [];
  constructor(private medicineService:MedicineService){
    this.medicines = medicineService.getAll();
  }

  ngOnInit(): void{

  }
}
