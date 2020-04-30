import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseModelCar2';

  public ModelCar:string[]=["Toyota","Audi","Mercedes","BMW","Renault","Citroen","Hundai","Mazda","Subaru","Peugeot","Suzuki","Kia"];
  public filter:string;
}
