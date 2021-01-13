import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  sendText = "Angular";
  receivedText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  requestText(value: string){
    this.receivedText = value
  }
}
