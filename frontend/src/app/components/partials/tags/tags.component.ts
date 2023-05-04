import { Component } from '@angular/core';
import { MedicineService } from 'src/app/services/medicine.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(medicineService:MedicineService){
    this.tags = medicineService.getAllTags();
  }

  ngOnInit(): void{}
}
