import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  constructor () { }

  ngOnInit(): void {
  }

  @Input() rating: number = 0;
  @Input() isReadonly: boolean=false;
}
