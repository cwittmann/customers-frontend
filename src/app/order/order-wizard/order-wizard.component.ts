import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { Order } from 'src/app/shared/model/order';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from 'src/app/shared/services/order/order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-order-wizard',
  templateUrl: './order-wizard.component.html',
  styleUrls: ['./order-wizard.component.scss'],
})
export class OrderWizardComponent implements OnInit {
  id: any;
  isNew: boolean = false;
  order: Order;
  form: FormGroup;
  currentTab: number = 0;
  lastTab: number = 2;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private orderService: OrderService,
    public snackBar: MatSnackBar,
    private elem: ElementRef,
    private renderer: Renderer2
  ) {
    this.activatedRoute.url.subscribe((params) => {
      if (params[0].path === 'order-new') {
        this.isNew = true;
      }
    });
  }

  get formControls() {
    return this.form.controls;
  }

  submit() {
    this.form.markAllAsTouched();
    this.order = this.form.value as Order;

    if (this.isNew) {
      this.order.id = this.id;

      this.orderService.insertOrder(this.order).subscribe(() => {
        this.snackBar.open('Order ' + this.order.name + ' added', null, {
          duration: 5000,
        });
        this.router.navigate(['/order-list']);
      });
    } else {
      this.orderService.updateOrder(this.order).subscribe(() => {
        this.snackBar.open('Order ' + this.order.name + ' updated', null, {
          duration: 5000,
        });
        this.router.navigate(['/order-details', this.order.id]);
      });
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(''),
      customerId: new FormControl('', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
      productId: new FormControl('', [Validators.required, Validators.minLength(36), Validators.maxLength(36)]),
      date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.min(1)]),
    });

    this.id = this.activatedRoute.snapshot.params.id;

    if (this.isNew) {
      const uuid = uuidv4();
      this.id = uuid;
      this.order = new Order(this.id, null, null, null, null, null, null);

      return;
    }

    this.orderService.getOrder(this.id).subscribe((orders: Order[]) => {
      this.order = orders[0];
      this.form.markAllAsTouched();
      this.form.setValue(this.order);
    });

    this.showTab(0);
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
