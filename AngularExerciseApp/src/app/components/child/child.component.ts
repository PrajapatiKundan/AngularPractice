import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  @Input() receivedTextOfChild: string = "";

  @Output() customEventOfChild = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  sendText(){
    this.customEventOfChild.emit("Neo");
  }
}
