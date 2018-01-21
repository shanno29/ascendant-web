import {Network} from '../core/network';
import {CardModel} from '../core/shared/card';
import {Component, NgModule} from '@angular/core';
import {MaterialModule} from '../core/shared/material';
import {Observable} from 'rxjs/Observable';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-forms',
  template: `
		<div class="container">
			<app-card *ngFor="let model of model$ | async" [model]=model></app-card>
		</div>
  `
})
export class FormsComponent {
  model$: Observable<CardModel[]>;

  constructor(public network: Network) {
    this.model$ = this.network.get('/forms');
  }
}


@NgModule({
  declarations: [FormsComponent],
  imports: [MaterialModule, FormsModule.routes],
})
export class FormsModule {
  static routes = RouterModule.forChild([
    {path: 'forms', component: FormsComponent}
  ]);
}
