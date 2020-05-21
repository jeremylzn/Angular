import { Component, OnInit } from '@angular/core';
import { InputService } from '../shared/services/input.service';


@Component({
  selector: 'app-child-alert-cnt',
  templateUrl: './child-alert-cnt.component.html',
  styleUrls: ['./child-alert-cnt.component.css']
})
export class ChildAlertCntComponent implements OnInit {
  counter:number;

  constructor(private inputService: InputService) { 
    this.counter=this.inputService.funcCtn;
    this.inputService.eventEmitter.subscribe(funcCtn=>alert(funcCtn))
  }

  ngOnInit(): void {
  }

}
