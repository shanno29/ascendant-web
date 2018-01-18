import * as Angular from "../module/angular.module";
import {Network} from "../../provider/network";


// Entity
export interface FooterEntity {
  id: number;
  items: [string[]];
  facebook: {
    title: string;
    subtitle: string;
    nav: string;
    image: string;
  };
  twitter: {
    title: string;
    subtitle: string;
    nav: string;
    image: string;
  };
}


// Component
@Angular.Component({
  selector: 'footer-view',
  template: `    
    <div id="container" *ngIf="network.$footer | async as result" fxLayout="row" fxLayoutWrap="wrap">

      <!-- Info Sections -->
      <div id="section" *ngFor="let item of result.items">
        <p *ngFor="let text of item">{{text}}</p>
      </div>
  
      <!-- Social Section -->
      <div id="section" fxLayout="column" fxLayoutGap="16px">
        <a id="facebook" mat-raised-button>{{result.facebook.text}}</a>
        <a id="twitter" mat-raised-button>{{result.twitter.text}}</a>
      </div>

    </div>
  `,
  styles: [`

    #facebook { background-color: #3B5998 }
    
    #twitter { background-color: #00aced }

    #container  {
      background-color: #1565c0;
      justify-content: center;
      padding: 16px;
    }
    
    #section {
      margin: 12px;
      color: white;
    }

  `]
})
export class FooterComponent {
  constructor(public network: Network){}
}


// Module
@Angular.NgModule({
  declarations: [FooterComponent],
  imports: [Angular.MaterialModule],
  exports: [FooterComponent],
})
export class FooterModule {}
