import * as Angular from "../core/module/angular.module";
import * as Rx from "../core/module/rx.module";

@Angular.Injectable()
export class Network {

  constructor(private http: Angular.HttpClient) {}

  private base: String = 'http://localhost:3000/api';

  getRequest<T>(link): Rx.Observable<T> {
    return this.http.get<T>(`${this.base}/${link}`)
  }

}


