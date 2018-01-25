import {Network} from '../../core/network';
import {Observable} from 'rxjs/Observable';
import {Component} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from '../../core/shared/material';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FeatureModule} from '../index';
import {NetworkModule} from '../../core/network';
import {FooterModule} from './footer';
import {ToolbarModule} from './toolbar';
import {OverlayContainer} from '@angular/cdk/overlay';


export interface RootModel {
  color: string;
  splash: string;
}


@Component({
  selector: 'app-root',
  template: ` 
         
    <main fxLayout="column" *ngIf="model$ | async as model" [style.background-image]="sanitize(model.splash)">
      
			<app-toolbar [model]="model.toolbar" style="margin-bottom:96px"></app-toolbar>
      
			<div fxFlex="1"><router-outlet #o="outlet"></router-outlet></div>

			<app-footer [model]="model.footer" style="margin-top:96px"></app-footer>
      
    </main>
      
  `,
})
export class RootComponent {
  model$: Observable<RootModel>;

  constructor(private network: Network, private sanitizer: DomSanitizer) {
    this.model$ = this.network.get('/root');
  }

  sanitize(image: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }

}


@NgModule({
  bootstrap: [RootComponent],
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    FeatureModule,
    NetworkModule,
    ToolbarModule,
    FooterModule,
    RootModule.routes
  ],
})
export class RootModule {

  constructor(overlay: OverlayContainer) {
    overlay.getContainerElement().classList.add('ascendant-root-theme');
  }

  static routes = RouterModule.forRoot([
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: 'app/feature/home#HomeModule'},
    {path: 'about', loadChildren: 'app/feature/about#AboutModule'},
    {path: 'forms', loadChildren: 'app/feature/forms#FormsModule'},
    {path: 'contact', loadChildren: 'app/feature/contact#ContactModule'},
    {path: 'consulting', loadChildren: 'app/feature/consulting#ConsultingModule'},
  ], { useHash: true } );

}



