import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  interval: any;
  connectionChanged: EventEmitter<Boolean>;

  constructor(private http: HttpClient) {
    this.connectionChanged = new EventEmitter();
    this.InitializeConnectionCheck();
  }

  goOffline() {
    this.connectionChanged.emit(false);
    clearInterval(this.interval);
  }

  goOnline() {
    this.connectionChanged.emit(true);
    this.InitializeConnectionCheck();
  }

  InitializeConnectionCheck() {
    this.interval = setInterval(async () => {
      await this.http
        .get('http://localhost:8000/api/connect')
        .toPromise()
        .then(() => {
          this.connectionChanged.emit(true);
        })
        .catch((error) => {
          this.connectionChanged.emit(false);
        });
    }, 5000);
  }
}
