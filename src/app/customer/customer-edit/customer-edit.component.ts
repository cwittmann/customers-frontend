import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/model/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
})
export class CustomerEditComponent implements OnInit {
  id: any;
  isNew: boolean = false;
  customer: Customer;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private customerService: CustomerService,
    public snackBar: MatSnackBar
  ) {
    this.activatedRoute.url.subscribe((params) => {
      if (params[0].path === 'customer/new') {
        this.isNew = true;
      }
    });
  }

  get formControls() {
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    this.customer = this.form.value as Customer;

    if (this.isNew) {
      this.customer.id = this.id;

      this.customerService.insertCustomer(this.customer).subscribe(() => {
        this.snackBar.open('Customer ' + this.customer.firstName + ' ' + this.customer.lastName + ' added', null, {
          duration: 5000,
        });
        this.router.navigate(['/customer-list']);
      });
    } else {
      this.customerService.updateCustomer(this.customer).subscribe(() => {
        this.snackBar.open('Customer ' + this.customer.firstName + ' ' + this.customer.lastName + ' updated', null, {
          duration: 5000,
        });
        this.router.navigate(['/customer-details', this.customer.id]);
      });
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      title: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      job: new FormControl(''),
      birthDate: new FormControl('', [Validators.required]),
      streetAddress: new FormControl('', [Validators.required, Validators.minLength(4)]),
      postalCode: new FormControl('', [Validators.required, Validators.minLength(4)]),
      city: new FormControl('', [Validators.required, Validators.minLength(2)]),
      country: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]),
      currency: new FormControl('', [Validators.required, Validators.minLength(2)]),
      phone: new FormControl('', [Validators.required, Validators.minLength(6)]),
      eMail: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    this.id = this.activatedRoute.snapshot.params.id;

    if (this.isNew) {
      const uuid = uuidv4();
      this.id = uuid;
      this.customer = new Customer(
        this.id,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      );

      return;
    }

    this.customerService.getCustomer(this.id).subscribe((data: Customer[]) => {
      this.customer = data[0];
      this.form.markAllAsTouched();
      this.form.setValue(this.customer);
    });
  }
}
