import {CardModel} from '../core/shared/card';
import {Network} from '../core/network';
import {Component, NgModule} from '@angular/core';
import {MaterialModule} from '../core/shared/material';
import {RouterModule} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <app-card *ngFor="let model of model$ | async" [model]=model></app-card>
    </div>
  `
})
export class AboutComponent {
  model$: Observable<CardModel>;

  constructor(private network: Network) {
    this.model$ = this.network.get('/about');
  }
}


@NgModule({
  declarations: [AboutComponent],
  imports: [MaterialModule, AboutModule.routes],
})
export class AboutModule {
  static routes = RouterModule.forChild([
    {path: 'about', component: AboutComponent}
  ]);
}
