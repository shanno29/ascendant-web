import {CardModel} from '../core/shared/card';
import {Network} from '../core/network';
import {Component, NgModule} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MaterialModule} from '../core/shared/material';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-home',
  template: `
		
    <div class="container">
			<app-card *ngFor="let model of model$ | async" [model]=model></app-card>
		</div>
    
  `
})
export class HomeComponent {
  model$: Observable<CardModel[]>;

  constructor(private network: Network) {
    this.model$ = this.network.get('/home');
  }
}


@NgModule({
  declarations: [HomeComponent],
  imports: [MaterialModule, HomeModule.routes],
})
export class HomeModule {
  static routes = RouterModule.forChild([
    {path: 'home', component: HomeComponent}
  ]);
}

