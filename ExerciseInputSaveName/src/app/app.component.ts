import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExerciseInputSaveName';

  names:string[]=[];

  SaveName(input:string):void{
    this.names.push(input);
  }


}
