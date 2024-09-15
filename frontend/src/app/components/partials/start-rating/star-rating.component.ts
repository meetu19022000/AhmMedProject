import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating = 0;
  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  stars: boolean[] = Array(5).fill(false);

  rate(star: number) {
    this.rating = star;
    this.ratingChange.emit(this.rating);
  }
}
