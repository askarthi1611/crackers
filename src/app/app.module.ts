import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceListComponent } from './price-list/price-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { PriceListService } from './price-list/price-list.service';
import {HttpClientModule} from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    AppComponent,
    PriceListComponent,
  ],
  imports: [
    TableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    InputNumberModule,
    HttpClientModule,

  ],
  providers: [PriceListService],
  bootstrap: [AppComponent],
})
export class AppModule { }
