import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputDetailComponent } from './page/input-detail/input-detail.component';
import { ReviewsConfirmComponent } from './page/reviews-confirm/reviews-confirm.component';

const routes: Routes = [
  { path: '', redirectTo: '/input-datail', pathMatch: "full" }
,
  {
    path: 'input-datail',
    component: InputDetailComponent
  },
  {
    path: 'review-confirm',
    component: ReviewsConfirmComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
