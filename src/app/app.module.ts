import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilingTypeComponent } from './component/filing-type/filing-type.component';
import { MonthComponent } from './component/month/month.component';
import { YearComponent } from './component/year/year.component';
import { SaleAmountComponent } from './component/sale-amount/sale-amount.component';
import { TaxAmountComponent } from './component/tax-amount/tax-amount.component';
import { SurchargeComponent } from './component/surcharge/surcharge.component';
import { PenaltyComponent } from './component/penalty/penalty.component';
import { TotalAmountComponent } from './component/total-amount/total-amount.component';
import { DatePipe } from '@angular/common';
import { InputDetailComponent } from './page/input-detail/input-detail.component';
import { ReviewsConfirmComponent } from './page/reviews-confirm/reviews-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    FilingTypeComponent,
    MonthComponent,
    YearComponent,
    SaleAmountComponent,
    TaxAmountComponent,
    SurchargeComponent,
    PenaltyComponent,
    TotalAmountComponent,
    InputDetailComponent,
    ReviewsConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
