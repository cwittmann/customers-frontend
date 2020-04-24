import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/model/order';

@Component({
  selector: 'app-order-wizard',
  templateUrl: './order-wizard.component.html',
  styleUrls: ['./order-wizard.component.scss'],
})
export class OrderWizardComponent implements OnInit {
  order: Order;

  constructor() {}

  ngOnInit(): void {}

  navigate(direction) {}

  save() {}
}
