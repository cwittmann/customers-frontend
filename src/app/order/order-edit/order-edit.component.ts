import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Order } from 'src/app/shared/model/order';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { v4 as uuidv4 } from 'uuid';
import { Customer } from 'src/app/shared/model/customer';
import { Product } from 'src/app/shared/model/product';
import { CustomerService } from 'src/app/shared/services/customer/customer.service';
import { ProductService } from 'src/app/shared/services/product/product.service';
import { OrderStatus } from 'src/app/shared/enum/order-status';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss'],
})
export class OrderEditComponent implements OnInit {
  id: any;
  isNew: boolean = false;
  order: Order;
  allCustomers: Customer[];
  allProducts: Product[];
  form: FormGroup;
  currentTab: number = 0;
  lastTab: number = 2;
  orderStatusTypes = OrderStatus;
  orderStatusTypeOptions = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    private customerService: CustomerService,
    private productService: ProductService,
    public snackBar: MatSnackBar,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {
    this.activatedRoute.url.subscribe((params) => {
      if (params[0].path === 'new') {
        this.isNew = true;
      }
    });
  }

  get formControls() {
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.order = this.form.value as Order;

    if (this.isNew) {
      this.order.id = this.id;

      this.orderService.insertOrder(this.order);
      this.snackBar.open('Order added', null, {
        duration: 5000,
      });
      this.router.navigate(['/order/list']);
    } else {
      this.orderService.updateOrder(this.order);
      this.snackBar.open('Order updated', null, {
        duration: 5000,
      });
      this.router.navigate(['/order/details', this.order.id]);
    }
  }

  async ngOnInit() {
    this.orderStatusTypeOptions = Object.keys(this.orderStatusTypes)
      .map((key) => this.orderStatusTypes[key])
      .filter((value) => typeof value !== 'string') as string[];

    this.form = new FormGroup({
      id: new FormControl(''),
      customerid: new FormControl('', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
      productid: new FormControl('', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
    });

    this.id = this.activatedRoute.snapshot.params.id;
    let allCustomers = await this.customerService.getAllCustomers();
    this.allCustomers = allCustomers;
    this.allCustomers = this.allCustomers.sort((customer1, customer2) =>
      customer1.lastname > customer2.lastname ? 1 : -1
    );

    let allProductsPromise = await this.productService.getAllProducts();
    this.allProducts = allProductsPromise as Product[];
    this.allProducts = this.allProducts.sort((product1, product2) => (product1.name > product2.name ? 1 : -1));

    if (this.isNew) {
      const uuid = uuidv4();
      this.id = uuid;
      this.order = new Order(this.id, null, null, null, null, null, null);

      this.showTab(0);
      return;
    }

    let orders = await this.orderService.getOrder(this.id);
    this.order = orders[0];
    this.showTab(0);
    this.form.markAllAsTouched();
    this.form.setValue(this.order);
  }

  showTab(newTab) {
    let tabElements = this.elem.nativeElement.querySelectorAll('.tab');
    let currentTabElement = tabElements[this.currentTab];
    currentTabElement.style.display = 'none';
    let newTabElement = tabElements[newTab];
    newTabElement.style.display = 'block';

    let navElements = this.elem.nativeElement.querySelectorAll('.breadcrumb-item');
    let currentNavElement = navElements[this.currentTab];
    this.renderer.removeClass(currentNavElement, 'active');
    let newNavElement = navElements[newTab];
    this.renderer.addClass(newNavElement, 'active');
  }

  previous() {
    if (this.currentTab === 0) {
      return;
    }
    this.showTab(this.currentTab - 1);
    this.currentTab = this.currentTab - 1;
  }
  next() {
    if (this.currentTab === this.lastTab) {
      return;
    }
    this.showTab(this.currentTab + 1);
    this.currentTab = this.currentTab + 1;
  }

  navigate(tab) {
    this.showTab(tab);
    this.currentTab = tab;
  }
}
