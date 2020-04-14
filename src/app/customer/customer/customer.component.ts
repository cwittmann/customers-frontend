import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer'
import { CustomerService } from 'src/app/shared/services/customer/customer.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((data: Customer[]) => {this.customers = data; });
  }
}
