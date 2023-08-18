// import { DecimalPipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-penalty',
  templateUrl: './penalty.component.html',
  styleUrls: ['./penalty.component.css']
})
export class PenaltyComponent implements OnInit {

  penalty:number=200;

  @Output() penaltytoTotal = new EventEmitter<number>();
  @Output() penaltyOutput =  new EventEmitter<number>()
  constructor() { 
    
  }

  ngOnInit(): void {
    this.emitPenalty()
  }

  emitPenalty() {
    this.penaltytoTotal.emit(this.penalty);
    this.penaltyOutput.emit(this.penalty);
  }

}
