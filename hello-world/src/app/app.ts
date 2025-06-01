import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TestComponent} from './test/test'

@Component({   //meta data or more accurate is decorator
  selector: 'app-root',    //custom html tags can check index.html
  imports: [RouterOutlet,TestComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {     //class
  protected title = 'hello-world-evolution';
}
