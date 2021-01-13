import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  counter = 5;
  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){ 
    if(this.selected)
      this.counter--;
    else
      this.counter++;
    this.selected = !this.selected;
  }
}
