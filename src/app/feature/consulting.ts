import * as Angular from "../core/module/angular.module";
import * as Rx from "../core/module/rx.module"
import {Network} from "../manager/network";
import {ActivatedRoute} from "@angular/router";

// Entity
export interface ConsultingEntity {
  id: number;
  nav: string;
  title: string;
  image: string;
  texts: string[];
}


// Component
@Angular.Component({
  selector: 'app-consulting',
  template: `
    <div id="consulting_container" fxLayout="row" fxLayoutWrap="wrap" fxLayoutAlign="center">
      
      <mat-card *ngFor="let result of $consulting | async" routerLink="{{result.nav}}">
        
        <img mat-card-image src='{{result.image}}'>
        
        <mat-card-title>
          <h6>{{result.title}}</h6>
        </mat-card-title>
        
      </mat-card>
    
    </div>`,
  styles: [`    
    
    #consulting_container {
      flex: 1;
      margin-top: 72px !important;
      margin-bottom: 72px !important;
    }
    
    mat-card {
      margin: 24px !important;
      height: 260px;
      width: 260px;
    }
    
    img {
      height: 200px;
    }
    
  `]
})
export class ConsultingComponent {

  $consulting: Rx.Observable<ConsultingEntity[]>;

  constructor(private network: Network){
    this.$consulting = network.getRequest("/consulting")
  }

}


// Child Component
@Angular.Component({
  selector: 'app-consulting-child-view',
  template: `
    <div class="container">
      
      <mat-card>
        <div *ngIf="$consulting | async as result" >
          
          <mat-card-title>
            <h4>{{result.title}}</h4>
          </mat-card-title>
          
          <mat-card-content>
            <p *ngFor="let text of result.texts">{{text}}</p>
          </mat-card-content>
        
        </div>
      </mat-card>
    
    </div>
  `
})
export class ConsultingChildComponent {

  $consulting: Rx.Observable<ConsultingEntity>;

  constructor(public route: ActivatedRoute, public network: Network) {
    this.route.params.subscribe(params => {
      this.$consulting = this.network.getRequest(`/consulting/${params['id']}`);
    })
  }

}


// Module
@Angular.NgModule({
  declarations: [ConsultingComponent, ConsultingChildComponent],
  imports: [
    Angular.MaterialModule,
    Angular.RouterModule.forChild([
      {path: 'consulting', component: ConsultingComponent, data: {state: 'consulting'}},
      {path: 'consulting/:id', component: ConsultingChildComponent, data: {state: 'child'}}
    ])
  ],
})
export class ConsultingModule {}
