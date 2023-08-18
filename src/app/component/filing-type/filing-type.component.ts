import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filing-type',
  templateUrl: './filing-type.component.html',
  styleUrls: ['./filing-type.component.css']
})
export class FilingTypeComponent implements OnInit {
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  selectedValue = '0';
  surcharge = 0;    
  penalty = 0;
  @Output() selectedValueOutput = new EventEmitter<string>();

  onRadioClick(selectedValue: string) {
    
    if(selectedValue === '0') {
          this.selectedValue = '0';
          this.surcharge = 0; 
          this.penalty = 0;
          console.log('Selected Ordinary Filing');
          this.selectedValueOutput.emit(this.selectedValue)
          
        } else if (selectedValue === '1') {
          this.selectedValue = '1';
          this.surcharge = 0;
          this.penalty = 0;
          console.log('Selected Additional Filing');
          this.selectedValueOutput.emit(this.selectedValue)
          
        }


    }






}
