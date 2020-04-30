import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseModelCar';

options:string[] = ["manufacturer","model","price","wiki","img"];

car:any =
[
    {
      manufacturer: 'Porsche',
      model: '911',
      price: 135000,
      wiki: 'http://en.wikipedia.org/wiki/Porsche_997',
      img: '2004_Porsche_911_Carrera_type_997.jpg'
    },
    {
      manufacturer: 'Nissan',
      model: 'GT-R',
      price: 80000,
      wiki:'http://en.wikipedia.org/wiki/Nissan_Gt-r',
      img: '250px-Nissan_GT-R.jpg'
    },
    {
      manufacturer: 'BMW',
      model: 'M3',
      price: 60500,
      wiki:'http://en.wikipedia.org/wiki/Bmw_m3',
      img: '250px-BMW_M3_E92.jpg'
    },
   {
      manufacturer: 'Audi',
      model: 'S5',
      price: 53000,
      wiki:'http://en.wikipedia.org/wiki/Audi_S5#Audi_S5',
      img: '250px-Audi_S5.jpg'
    },
    {
      manufacturer: 'Audi',
      model: 'TT',
      price: 40000,
      wiki:'http://en.wikipedia.org/wiki/Audi_TT',
      img: '250px-2007_Audi_TT_Coupe.jpg'
    }
]

public order(option:string):void{

  if (option=="price") {
    this.car.sort((a,b)=>a[option]-b[option])
  } else{
    this.car.sort((a,b)=>a[option].localCompare(b[option]))

  }

}

}
