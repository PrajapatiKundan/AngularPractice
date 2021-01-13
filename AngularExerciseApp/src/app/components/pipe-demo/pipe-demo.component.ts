import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {

  text: string = "asjadjdcdjdcdbdhvrhvfjf";
  
  constructor() { }

  ngOnInit(): void {
  }

}
