import * as Angular from "../core/module/angular.module";
import {Network} from "../provider/network";

// Entity
export interface ContactEntity {
  id: number;
  titles: string[];
  subtitles: string[];
  texts: string[];
}


// Component
@Angular.Component({
  selector: 'app-contact',
  template: `
    <div class="container">

      <mat-card>
        <div *ngFor="let result of network.$contact | async">

          <mat-card-title>
            <h4 *ngFor="let title of result.titles">{{title}}</h4>
          </mat-card-title>

          <mat-card-subtitle>
            <h2 *ngFor="let subtitle of result.subtitles">{{subtitle}}</h2>
          </mat-card-subtitle>

          <mat-card-content>
            <p *ngFor="let text of result.texts">{{text}}</p>
          </mat-card-content>

        </div>
      </mat-card>

    </div>`,
})
export class ContactComponent {
  constructor(public network: Network){}
}


// Module
@Angular.NgModule({
  declarations: [ContactComponent],
  imports: [
    Angular.MaterialModule,
    Angular.RouterModule.forChild([
      {path: 'contact', component: ContactComponent, data: {state: 'contact'}}
    ])
  ],
})
export class ContactModule {}
