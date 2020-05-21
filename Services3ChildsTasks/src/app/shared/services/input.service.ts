import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  public eventEmitter: EventEmitter<number> = new EventEmitter<number>();

  private inputNumber: number = 0;
  private inputCtn: number = 0;

  public get input(): number {
    return this.inputNumber;
  }

  public set input(inputNumber: number) {
    this.inputNumber = inputNumber;
    this.eventEmitter.emit(this.inputNumber);
  }

  public get funcCtn(): number {
    return this.inputCtn;
  }

  public set funcCtn(inputCtn: number) {
    this.inputCtn = inputCtn;
    this.eventEmitter.emit(this.inputCtn);
  }


  public incCtn() {
    this.funcCtn++;
  }
  
}
