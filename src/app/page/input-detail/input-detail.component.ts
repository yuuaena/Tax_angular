import { Component, Input, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-input-detail',
  templateUrl: './input-detail.component.html',
  styleUrls: ['./input-detail.component.css']
})
export class InputDetailComponent implements OnInit {

  

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  myData= {
    filingptype:'',
    month:'',
    year:'',
    penalty: 0,
    saleAmount: 0,
    surcharge: 0,
    taxAmount: 0,
    totalAmount: 0,
  }

  goToRenavigateToReview() {
    if (this.DataType === '0') {
      this.myData.totalAmount = this.myData.taxAmount
    }
    const params : NavigationExtras = {
      queryParams : this.myData
    }
    this.router.navigate(['/review-confirm'],params);
  }
  
  DataType:string = '0';
  setType(selected:string){
    this.DataType = selected;
    if (this.DataType === '0') {
      this.myData.filingptype = 'Ordinary'
    }
    else if (this.DataType === '1'){
      this.myData.filingptype = 'Additional'
    }
  }

  totalval:number= 0;
  getvatTotalValue(event:number){
    this.totalval = event;
    
  }
  
  getmountValue(mount:string){
    this.myData.month = mount;
    console.log('get mount :',this.myData.month);
    
  }
  getyearValue(year:number){
    this.myData.year = year+'';
    console.log('get year :',this.myData.year);
    

  }

  taxAmountOutput: number = 0;
  updateSurcharge(taxAmount: number) {
    this.taxAmountOutput = taxAmount;
  }

  totalValue: number = 0;
  updateTotal(value: number) {
    this.totalValue += value;
    this.totalValue = parseFloat(this.totalValue.toFixed(2));

  }

  getPenalty(penalty:number){
    this.myData.penalty = penalty
    console.log('get penalty :',this.myData.penalty);

  }

  getSaleAmount(saleAmount:number){
    this.myData.saleAmount = saleAmount;

  }

  getsurcharge(surcharge:number){
    this.myData.surcharge = surcharge;
    console.log('get surcharge :',this.myData.surcharge);

  }

  getTaxAmount(taxAmount:number){
    this.myData.taxAmount = taxAmount;
    console.log('get taxAmount :',this.myData.taxAmount);
  }

  gettotalAmount(tatolAmount:number){
    this.myData.totalAmount = tatolAmount;
    console.log('get tatolAmount :',this.myData.totalAmount);
  }
  

}
