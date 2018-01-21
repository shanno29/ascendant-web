import {Network} from '../core/network';
import {Component, NgModule} from '@angular/core';
import {MaterialModule} from '../core/shared/material';
import {RouterModule} from '@angular/router';
import {CardModel} from '../core/shared/card';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-contact',
  template: `
		<div class="container">
			<app-card *ngFor="let model of model$ | async" [model]=model></app-card>
		</div>
  `
})
export class ContactComponent {
  model$: Observable<CardModel>;

  constructor(public network: Network) {
    this.model$ = this.network.get('/contact');
  }
}

@NgModule({
  declarations: [ContactComponent],
  imports: [MaterialModule, ContactModule.routes],
})
export class ContactModule {
  static routes = RouterModule.forChild([
    {path: 'contact', component: ContactComponent},
  ]);
}
