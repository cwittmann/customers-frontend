import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './services/customer/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { IndexedDatabaseService } from './services/database/indexed-database.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CustomerService, IndexedDatabaseService],
})
export class SharedModule {}
