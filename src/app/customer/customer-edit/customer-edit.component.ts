import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  id: any;
  isNew: boolean;
  customer: Customer;
  editForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(this.id).subscribe((data: Customer[]) => {
      this.customer = data[0];          
    });    
  }
}
