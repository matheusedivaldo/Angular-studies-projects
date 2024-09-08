import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {

  name: string = "Matheus Edivaldo";
  age: number = 18;
  job = "Junior programmer";
  hobbies = ["Ver Filmes", "Treinar"];
  car = {
    name: 'Uno',
    year: 2015
  }
}