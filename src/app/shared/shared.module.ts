import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './services/customer/customer.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [CustomerService]
})
export class SharedModule { }
