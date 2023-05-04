import { Injectable } from '@angular/core';
import { Medicine } from '../shared/models/Medicine';
import { sample_medicines } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor() { }

  getAll():Medicine[]{
    return sample_medicines;
  }
}
