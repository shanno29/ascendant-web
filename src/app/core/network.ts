import {Config} from './config';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Injectable, NgModule} from '@angular/core';


export abstract class Network {

  abstract base(): string;

  abstract get<T>(link): Observable<T>;

}


@Injectable()
export class NetworkImpl implements Network {

  constructor(private http: HttpClient) {}

  base(): string  { return Config.api; }

  get<T>(link): Observable<T> {
    return this.http.get<T>(`${this.base()}${link}`);
  }

}


@NgModule({
  imports: [HttpClientModule],
  providers: [{provide: Network, useClass: NetworkImpl}],
})
export class NetworkModule {}
