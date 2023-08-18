import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-surcharge',
  templateUrl: './surcharge.component.html',
  styleUrls: ['./surcharge.component.css']
})
export class SurchargeComponent implements OnChanges {



  



  constructor() { 
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.TaxAmountOutput){
      this.emitTaxToTotal();
      this.emitSurchrge();
    }
  }

  
  @Input() TaxAmountOutput : number = 0;
  @Output() sendTaxToTotal = new EventEmitter<number>(); 

  emitTaxToTotal() {
    const surchargeAmount = this.TaxAmountOutput * 0.1;
    this.TaxAmountOutput = +surchargeAmount.toFixed(2);
    this.sendTaxToTotal.emit(this.TaxAmountOutput);
    console.log(this.TaxAmountOutput);
  }

  @Output() surchargeOutput = new EventEmitter<number>()

  emitSurchrge(){
    this.surchargeOutput.emit(this.TaxAmountOutput)
    console.log("emit Surcharge: " , this.TaxAmountOutput);
    
  }
    






}
