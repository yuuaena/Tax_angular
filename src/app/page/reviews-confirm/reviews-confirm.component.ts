import { Component, OnInit } from '@angular/core';
// import { DataService } from '../data.service';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-reviews-confirm',
  templateUrl: './reviews-confirm.component.html',
  styleUrls: ['./reviews-confirm.component.css']
})
export class ReviewsConfirmComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  filingptype: string = '';
  month: string = '';
  year: string = '';
  penalty: number = 0;
  saleAmount: number = 0;
  surcharge: number = 0;
  taxAmount: number = 0;
  totalAmount: number = 0;

  ngOnInit(): void {
    this.filingptype = this.route.snapshot.queryParamMap.get('filingptype') || '';
    this.month = this.route.snapshot.queryParamMap.get('month') || '';
    this.year = this.route.snapshot.queryParamMap.get('year') || '';
    this.penalty = Number(this.route.snapshot.queryParamMap.get('penalty') || 0);
    this.saleAmount = Number(this.route.snapshot.queryParamMap.get('saleAmount') || 0);
    this.surcharge = Number(this.route.snapshot.queryParamMap.get('surcharge') || 0);
    this.taxAmount = Number(this.route.snapshot.queryParamMap.get('taxAmount') || 0);
    this.totalAmount = Number(this.route.snapshot.queryParamMap.get('totalAmount') || 0);

  }

  goTodetail() {

    this.router.navigate(['/input-detail']);

  }

  receivedValue: string = ''; 

  handleSelectedValue(value: string) {
    this.receivedValue = value;
  }




}
