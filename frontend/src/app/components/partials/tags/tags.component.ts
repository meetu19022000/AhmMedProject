import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {
  tags?:Tag[];
  constructor(productService:ProductService){
    this.tags = productService.getAllTags();
  }

  ngOnInit(): void{}
}
