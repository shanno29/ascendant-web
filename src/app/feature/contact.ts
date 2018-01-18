import * as Angular from "../core/module/angular.module";
import * as Rx from "../core/module/rx.module"
import {Network} from "../manager/network";

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
        <div *ngFor="let result of $contact | async">

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

  $contact: Rx.Observable<ContactEntity[]>;

  constructor(private network: Network){
    this.$contact = network.getRequest("/contact")
  }

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
