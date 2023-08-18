import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnChanges {

  @Input() total: number = 0;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.total) {
      this.emittotalAmount()
    }
  }

  ngOnInit(): void {
  }

  @Output() totalAmountOutput = new EventEmitter<number>(); 


  emittotalAmount(){
    this.totalAmountOutput.emit(this.total)
    console.log("emit totalAmount: " , this.total);
  }

}
