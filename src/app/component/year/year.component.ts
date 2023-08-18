import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() yearOutput = new EventEmitter<number>();
  selectedYear: number= 0;
  submitYear() {
    console.log('Selected Year:', this.selectedYear);
    this.yearOutput.emit(this.selectedYear);
}




}
