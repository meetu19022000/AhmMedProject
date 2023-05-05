import { Injectable } from '@angular/core';
import { Medicine } from '../shared/models/Medicine';
import { sample_medicines, sample_tags } from 'src/data';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }

  getAll():Medicine[]{
    return sample_medicines;
  }

  getAllMedicineBySearchTerms(searchTerm:string){
    return this.getAll().filter(medicine => medicine.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllMedicineByTags(tag:string):Medicine[]{
    return tag === "All"
      ? this.getAll()
      : this.getAll().filter(medicine => medicine.tags?.includes(tag));
  }

  getMedicineById(Id:string):Medicine{
    return this.getAll().find(medicine => medicine.id == Id) ?? new Medicine();
  }
}
