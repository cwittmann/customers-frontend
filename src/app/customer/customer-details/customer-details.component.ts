import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  id: any;
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(this.id).subscribe((data: Customer[]) => {this.customer = data[0]});
  }
}
