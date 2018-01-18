import * as Angular from "../core/module/angular.module";
import * as Rx from "../core/module/rx.module";


// Interface
export abstract class Network {

  abstract base: String;

  abstract getRequest<T>(link): Rx.Observable<T>

}


// Implementation
@Angular.Injectable()
export class NetworkImpl implements Network {

  constructor(private http: Angular.HttpClient) {}

  base: String = 'http://localhost:3000/api';

  getRequest<T>(link): Rx.Observable<T> {
    return this.http.get<T>(`${this.base}/${link}`)
  }

}


// Network
@Angular.NgModule({
  imports: [Angular.HttpClientModule],
  providers: [{
    provide: Network,
    useClass: NetworkImpl
  }],
})
export class NetworkModule {}
