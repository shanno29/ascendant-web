import * as Angular from "../core/module/angular.module";
import {Network} from "../provider/network";

// Entity
export interface AboutEntity {
  id: number;
  titles: string[];
  subtitles: string[];
  texts: string[];
}

// Component
@Angular.Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <mat-card>
        <div *ngFor="let result of network.$about | async">
          
          <mat-card-title>
            <h4 *ngFor="let title of result.titles">{{title}}</h4>
          </mat-card-title>
          
          <mat-card-subtitle>
            <h2 *ngFor="let subtitle of result.subtitles">{{subtitle}}</h2>
          </mat-card-subtitle>
          
          <mat-card-content>
            <p *ngFor="let body of result.texts">{{body}}</p>
          </mat-card-content>
          
        </div>
      </mat-card>
    </div>`,
})
export class AboutComponent {
  constructor(public network: Network) {}
}


// Module
@Angular.NgModule({
  declarations: [AboutComponent],
  imports: [
    Angular.MaterialModule,
    Angular.RouterModule.forChild([
      {path: 'about', component: AboutComponent, data: {state: 'about'}}
    ])
  ],
})
export class AboutModule {}
