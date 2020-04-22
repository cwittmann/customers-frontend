import { Component } from '@angular/core';
import { ConfirmDialogModel, ConfirmDialogComponent } from './common-components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'customers';

  constructor(public dialog: MatDialog){}

  openSettings(event){
    const dialogData = new ConfirmDialogModel("Settings", "Did you really expect to find something here?");

    this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });    
  }
}


