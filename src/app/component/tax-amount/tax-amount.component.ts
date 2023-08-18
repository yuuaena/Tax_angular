import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tax-amount',
  templateUrl: './tax-amount.component.html',
  styleUrls: ['./tax-amount.component.css']
})
export class TaxAmountComponent implements OnChanges {

  constructor() {
    
   }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.totalValue){
      this.calTaxAmount();
      this.emittaxAmount();
    }
  }

  ngOnInit(): void {
  }

  

  @Input() totalValue: number = 0;
  @Output() sendTaxToSurcharge = new EventEmitter<number>(); 
  @Output() sendTaxToTotal = new EventEmitter<number>();
  @Output() taxamountOutput = new EventEmitter<number>(); 
  calTaxAmount() {
    const TaxAmountOutput = (this.totalValue * 0.07).toFixed(2);
    this.sendTaxToSurcharge.emit(parseFloat(TaxAmountOutput));
    this.sendTaxToTotal.emit(parseFloat(TaxAmountOutput));
    this.totalValue = Number(TaxAmountOutput)
    console.log(TaxAmountOutput);
  }

  emittaxAmount(){
    this.taxamountOutput.emit(this.totalValue)
    console.log("emit TaxAmount: " , this.totalValue);
    
  }
  


}
