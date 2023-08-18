import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sale-amount',
  templateUrl: './sale-amount.component.html',
  styleUrls: ['./sale-amount.component.css']
})
export class SaleAmountComponent implements OnInit {
  @Output() saleAmountOutput = new EventEmitter<number>()  
  constructor() { }

  ngOnInit(): void {
  }

  emitSaleAmount(){
    this.saleAmountOutput.emit(parseFloat(this.totalValue))
    console.log("emit saleAmount: " , this.totalValue);
    
  }

  totalValue: string = '';
  @Output() totalValueChange = new EventEmitter<number>();
  updateTotalValue(): void {
    this.totalValueChange.emit(parseFloat(this.totalValue));
    console.log(this.totalValue);
  }


}
