import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  userName = "Jayne";

  userData = {
    email: "jayne@gmail.com",
    role: "Admin",
    age: 25,
    lastname: "Silva",
  }

  title = 'curso-angular';
}
