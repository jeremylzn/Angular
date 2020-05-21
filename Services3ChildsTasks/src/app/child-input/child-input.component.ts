import { Component, OnInit } from '@angular/core';
import { InputService } from '../shared/services/input.service';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  number:number;
  ctnInput:number=0;

  constructor(private inputService: InputService) { 
  }

  ngOnInit(): void {
  }

  clickSubmit(number:number):void{
    this.number=number;
    this.inputService.input=this.number;
    this.inputService.incCtn();
  }

}
