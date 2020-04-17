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

  filter(filterString: string, filterSelection: string){   

    this.customers = this.allCustomers.filter(function(elem) {

    let filterValue ;

      switch(filterSelection){        
        case "name":
          filterValue = elem.firstName + " " + elem.lastName;
          break;
        case "street":
          filterValue = elem.street;
          break;
        case "postalCode":
          filterValue = elem.postalCode ? elem.postalCode : "00000";
          break;
        case "city":
          filterValue = elem.city;
          break;
        case "country":
          filterValue = elem.country;
          break;
        default: 
          filterValue = elem.firstName + " " + elem.lastName;
      }
      
      return filterValue.toUpperCase().includes(filterString.toUpperCase());
    });
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe((data: Customer[]) => {
      this.allCustomers = data; 
      this.customers = this.allCustomers;
    });
  }
}
