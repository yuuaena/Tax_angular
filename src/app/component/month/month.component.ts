import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  public selectedMonth: string;
  public months: { label: string, value: string, disabled: boolean }[];
  @Output() monthOutput = new EventEmitter<string>()

  constructor() {
    this.months = this.calculateMonths();
    this.selectedMonth = this.months[0].value; // Set initial selected month
  }

  ngOnInit(): void {
    console.log(this.selectedMonth);
    this.selectMonths();
    
  }


  calculateMonths(): { label: string, value: string, disabled: boolean }[] {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    const monthOptions = months.map((month, index) => {
      return {
        label: month,
        value: month,
        disabled: index > currentMonth
      };
    });

    return monthOptions;
  }

  selectMonths() {
    this.monthOutput.emit(this.selectedMonth);
    console.log(this.selectedMonth);
    
  }
}
