import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input()
  object: any;
  user: User;

  constructor() {}

  ngOnInit(): void {
    this.user = this.object as User;
  }
}
