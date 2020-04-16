import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer'
import { CustomerService } from 'src/app/shared/services/customer/customer.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  allCustomers: Customer[];
  customers: Customer[];    

  constructor(private customerService: CustomerService) { }  

  filter(filterStringInput: string){
    const filterString = filterStringInput;
    this.customers = this.allCustomers.filter(function(elem) {
      const name = elem.firstName + " " + elem.lastName;
      return name.toUpperCase().includes(filterString.toUpperCase());
    });
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((data: Customer[]) => {
      this.allCustomers = data; 
      this.customers = this.allCustomers;
    });
  }
}
