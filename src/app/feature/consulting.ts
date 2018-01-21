import {Network} from '../core/network';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {Component, NgModule} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {MaterialModule} from '../core/shared/material';
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


export interface ConsultingModel {
  id: number;
  titles: string[];
  images: string[];
  texts: string[];
}


@Component({
  selector: 'app-consulting',
  template: `
		<div fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center" >

			<mat-card *ngFor="let model of model$ | async" routerLink="{{model.id}}">

				<img mat-card-image *ngFor="let image of model.images" [src]=sanitize(image)>

				<mat-card-title>
					<h5 *ngFor="let title of model.titles">{{title}}</h5>
				</mat-card-title>
        
			</mat-card>

		</div>
  `,
  styles: [`
    
    
    mat-card {
        height: 240px;
        width: 240px;
        margin-left: 24px;
        margin-right: 24px;
        margin-bottom: 48px;
        line-height: 24px;
    }

    img {
        height: 200px;
    }

  `]
})
export class ConsultingComponent {
  model$: Observable<ConsultingModel[]>;

  constructor(private network: Network, private sanitizer: DomSanitizer) {
    this.model$ = network.get('/consulting');
  }

  sanitize(image: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(`${image}`);
  }
}


@Component({
  selector: 'app-consulting-child-view',
  template: `    
    <div class="container">
      <app-card *ngIf="model$ | async as model" [model]=model></app-card>
    </div>
  `
})
export class ConsultingChildComponent {

  model$: Observable<ConsultingModel>;

  constructor(public route: ActivatedRoute, public network: Network) {
    this.route.params.subscribe(params => {
      this.model$ = this.network.get(`/consulting/${params['id']}`);
    });
  }

}


@NgModule({
  declarations: [ConsultingComponent, ConsultingChildComponent],
  imports: [MaterialModule, ConsultingModule.routes],
})
export class ConsultingModule {
  static routes =  RouterModule.forChild([
    {path: 'consulting', component: ConsultingComponent},
    {path: 'consulting/:id', component: ConsultingChildComponent}
  ]);
}
