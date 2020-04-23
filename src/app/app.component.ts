import { Component } from '@angular/core';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from './common-components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IndexedDatabaseService } from './shared/services/database/indexed-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customers';
  indexedDatabaseService: IndexedDatabaseService;

  constructor(public dialog: MatDialog, private IndexedDatabaseService: IndexedDatabaseService) {}

  openSettings(event) {
    const dialogData = new ConfirmDialogModel('Settings', 'Did you really expect to find something here?');

    this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });
  }

  ngOnInit() {
    this.IndexedDatabaseService.ngOnInit();
  }
}
