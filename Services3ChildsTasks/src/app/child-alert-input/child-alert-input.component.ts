import { Component, OnInit } from '@angular/core';
import { InputService } from '../shared/services/input.service';

@Component({
  selector: 'app-child-alert-input',
  templateUrl: './child-alert-input.component.html',
  styleUrls: ['./child-alert-input.component.css']
})
export class ChildAlertInputComponent implements OnInit {

  number:number;

  constructor(private inputService: InputService) {
    this.number=this.inputService.input;
    this.inputService.eventEmitter.subscribe(input=>alert(input))
   }

  ngOnInit(): void {
  }

}
