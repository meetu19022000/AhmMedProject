export class Product{
  id!: string;
  name!: string;
  shortDescription!: string;
  stars!: number;
  rating?: number;
  price!: number;
  imageUrl!: string;
  tags?: string[];
}
