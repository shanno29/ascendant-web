import * as Angular from "../module/angular.module";
import * as Rx from "../module/rx.module"
import {Network} from "../../manager/network";


// Entity
export interface ToolbarEntity {
  id: number;
  logo: string;
  link: string;
  items: [{
    id: number;
    nav: string;
    image: string;
    text: string;
  }]
}


// Component
@Angular.Component({
  selector: 'toolbar-view',
  template: `
    <mat-toolbar id="container" *ngIf="$toolbar | async as result">
      
      <!-- Logo -->
      <img id="logo-image" src="{{result.logo}}" routerLink="{{result.link}}" routerLinkActive="active">

      <!-- Spacer -->
      <a fxFlex="1 1 auto"></a>

      <!-- Nav Items -->
      <div *ngFor="let item of result.items">
        <a mat-button id="underlined" routerLink="{{item.nav}}" routerLinkActive="active">{{item.text}}</a>
      </div>
      
      <!--  Overflow Button  -->
      <mat-icon id="overflow" [matMenuTriggerFor]="menu">more_vert</mat-icon>

      <!--  Overflow Menu -->
      <mat-menu #menu="matMenu">
        <div *ngFor="let item of result.items">
          <a mat-button routerLink="{{item.nav}}" routerLinkActive="active">{{item.text}}</a>
        </div>
      </mat-menu>
      
    </mat-toolbar>
  `,
  styles: [`

    #container {  
      background: rgba(255, 255, 255, 0);
      padding-left:  0;
    }
    
    #overflow {
      padding: 24px;
      display: none;
      color: white;
      height:32px;
      width: 32px;
      font-size:32px;
      margin-right: -16px;
      margin-top: 24px;
    }
    
    #logo-image { 
      margin: 24px;
      margin-top: 64px;
      height: 64px 
    }

    #underlined {
      border-bottom: solid orange;
      font-size: 18px;
      color: white;
      margin-top: 24px;
      margin-right: 24px;
    }

    @media screen and (max-width: 820px) {
      #underlined {  display: none; }
      #overflow { display: unset; }
    }

  `],
})
export class ToolbarComponent {

  $toolbar: Rx.Observable<ToolbarEntity>;

  constructor(private network: Network) {
    this.$toolbar = network.getRequest("/toolbar");
  }

}


// Module
@Angular.NgModule({
  declarations: [ToolbarComponent],
  imports: [Angular.MaterialModule],
  exports: [ToolbarComponent],
})
export class ToolbarModule {}

