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

  async checkConnection() {
    let checkConnectionResult;

    await this.http
      .get('http://localhost:8000/api/connect')
      .toPromise()
      .then(() => {
        checkConnectionResult = true;
      })
      .catch((error) => {
        checkConnectionResult = false;
      });

    return checkConnectionResult;
  }

  goOffline() {
    this.connectionChanged.emit(false);
    clearInterval(this.interval);
  }

  goOnline() {
    this.InitializeConnectionCheck();
  }

  InitializeConnectionCheck() {
    this.interval = setInterval(async () => {
      let connectionCheckResult = await this.checkConnection();
      this.connectionChanged.emit(connectionCheckResult);
    }, 5000);
  }
}
