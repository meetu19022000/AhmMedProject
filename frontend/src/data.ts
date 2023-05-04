import { Medicine } from "./app/shared/models/Medicine";
import { Tag } from "./app/shared/models/Tag";

export const sample_medicines : Medicine[] = [
  {
    id:'1',
    name: 'Meet',
    shortDescription:'meet a patel',
    stars:3.5,
    rating: 120,
    price:1000000,
    imageUrl:'assets/medicine-1.jpg',
    tags:['HealthCare','Bio','FirstAid']
  },
  {
    id:'2',
    name: 'Vedant',
    shortDescription:'vedant v patel',
    stars:3,
    rating: 140,
    price:100000,
    imageUrl:'assets/medicine-2.jpg',
    tags:['Bio','FirstAid']
  },
  {
    id:'3',
    name: 'Vedant',
    shortDescription:'vedant v patel',
    stars:3,
    rating: 140,
    price:1.32,
    imageUrl:'assets/medicine-2.jpg',
    tags:['HealthCare','FirstAid']
  },
  {
    id:'4',
    name: 'Vedant',
    shortDescription:'vedant v patel',
    stars:3,
    rating: 140,
    price:2300,
    imageUrl:'assets/medicine-2.jpg',
    tags:['HealthCare','Bio']
  },
  {
    id:'5',
    name: 'Vedant',
    shortDescription:'vedant v patel',
    stars:3,
    rating: 140,
    price:250000,
    imageUrl:'assets/medicine-2.jpg',
    tags:['HealthCare']
  },
  {
    id:'6',
    name: 'Vedant',
    shortDescription:'vedant v patel',
    stars:3,
    rating: 140,
    price:100000,
    imageUrl:'assets/medicine-2.jpg',
    tags:['Bio']
  }
]

export const sample_tags:Tag[] = [
  {
    name:'All',
    count:3
  },
  {
    name:'Bio',
    count:2
  },
  {
    name:'FirstAid',
    count:5
  },
  {
    name:'HealthCare',
    count:1
  },
]
