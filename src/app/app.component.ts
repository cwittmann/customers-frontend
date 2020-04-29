import { Component } from '@angular/core';
import {
  ConfirmDialogModel,
  ConfirmDialogComponent,
} from './common-components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { IndexedDatabaseService } from './shared/services/database/indexed-database.service';
import { Router } from '@angular/router';
import { AuthService } from './shared/services/authentication/auth.service';
import { ConnectionService } from './shared/services/connection/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customers';
  indexedDatabaseService: IndexedDatabaseService;
  isAuthenticated: Boolean = false;
  isOnline: Boolean;

  constructor(
    public dialog: MatDialog,
    private IndexedDatabaseService: IndexedDatabaseService,
    private router: Router,
    private authService: AuthService,
    private connectionService: ConnectionService
  ) {
    authService.userAuthenticated.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
    });

    connectionService.connectionChanged.subscribe((isOnline) => {
      this.isOnline = isOnline;
    });
  }

  openSettings(event) {
    const dialogData = new ConfirmDialogModel('Logout', 'Do you want to logout?');

    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      const result = dialogResult;

      if (result) {
        this.authService.logout();
        this.router.navigate(['/login']);
      }
    });
  }

  ngOnInit() {
    this.IndexedDatabaseService.ngOnInit();
  }
}
