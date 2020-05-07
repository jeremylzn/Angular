import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public name:string;
  @Output() incName:EventEmitter<string>=new EventEmitter<string>();

  ngOnInit(): void {
  }

  public save(value){
    this.name=value;
    this.incName.emit(this.name);
  }

}
