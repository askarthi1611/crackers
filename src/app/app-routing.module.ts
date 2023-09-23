import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceListComponent } from './price-list/price-list.component';

const routes: Routes = [
  {path:'' , component:PriceListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
