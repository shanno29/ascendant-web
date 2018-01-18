import * as Angular from "../core/module/angular.module";
import {Observable} from "rxjs/Observable";
import {ConsultingEntity} from "../feature/consulting";
import {ToolbarEntity} from "../core/shared/toolbar";
import {FooterEntity} from "../core/shared/footer";
import {FormsEntity} from "../feature/forms";
import {ContactEntity} from "../feature/contact";
import {HomeEntity} from "../feature/home";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/first";
import {AboutEntity} from "../feature/about";

@Angular.Injectable()
export class Network {

  constructor(private http: Angular.HttpClient) {}

  private base: String = 'http://localhost:3000/api';

  getRequest<T>(link): Observable<T> { return this.http.get<T>(`${this.base}/${link}`) }

  $toolbar: Observable<ToolbarEntity> = this.getRequest("/toolbar");

  $footer: Observable<FooterEntity> = this.getRequest("/footer");

  $home: Observable<HomeEntity[]> = this.getRequest("/home");

  $forms: Observable<FormsEntity[]> = this.getRequest("/forms");

  $about: Observable<AboutEntity[]> = this.getRequest("/about");

  $contact: Observable<ContactEntity[]> = this.getRequest("/contact");

  $consulting: Observable<ConsultingEntity[]> = this.getRequest("/consulting");

  $consultingByName(name): Observable<ConsultingEntity> { return this.getRequest(`/consulting/${name}`) }

}


