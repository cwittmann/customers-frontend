import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  id: any;
  isNew: boolean;
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService) {}
 
  saveData(event){
      const allCustomerValuesValid = !Object.values(this.customer).some(x => (x == null || x == ''));
      
      if(allCustomerValuesValid){
        this.customerService.updateCustomer(this.customer).subscribe(() => {
            this.router.navigate([""]);
          });          
      }      
  }

  ngOnInit(): void {    
    this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.getCustomer(this.id).subscribe((data: Customer[]) => {
      this.customer = data[0]; 
    });    
  }
}
