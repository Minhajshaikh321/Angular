import { Component } from '@angular/core';

@Component({
  selector: '.app-test',
  imports: [],
  // templateUrl: './test.html',
  template:`<div>inline template </div>`,
  // styleUrl: './test.css'
  styles:[`
      div{
      color:red
      }
    `]

})
export class TestComponent {

}
