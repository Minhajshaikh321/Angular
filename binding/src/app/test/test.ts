import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  // templateUrl: './test.html',
  template:`
    <h2>Welcome {{name}} </h2> 
    <h2>{{2+2}}</h2>  
    <h2>{{"welcome "+name}} </h2> 
    <h2>{{name.length}} </h2> 
    <h2>{{name.toUpperCase()}}</h2> 
    <h2>{{greetUser()}}</h2>
  `,
    //to get data in curly braces is called interpolation in angular
  // styleUrl: './test.css'
  styles:[]
})
export class Test {
  public name="Code evolution";

  greetUser(){
    return "Hello "+this.name
  }

}
