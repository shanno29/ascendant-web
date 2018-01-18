import * as Angular from "./module/angular.module";
import {FeatureModule} from "../feature/index";
import {ProviderModule} from "../provider/index";

@Angular.Component({
  selector: 'app-root',
  template: `
    <main fxLayout="column" style="min-height: 100vh">
      
      <toolbar-view></toolbar-view>
      
      <div fxFlex="1">
        <router-outlet #o="outlet"></router-outlet>
      </div>
      
      <footer-view></footer-view>
      
    </main>
  `,
})
export class RootComponent {}

@Angular.NgModule({
  bootstrap: [RootComponent],
  declarations: [RootComponent],
  imports: [
    Angular.BrowserModule,
    Angular.MaterialModule,
    ProviderModule,
    FeatureModule,
    Angular.RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadChildren: 'app/feature/home#HomeModule'},
      {path: 'about', loadChildren: 'app/feature/about#AboutModule'},
      {path: 'forms', loadChildren: 'app/feature/forms#FormsModule'},
      {path: 'contact', loadChildren: 'app/feature/contact#ContactModule'},
      {path: 'consulting', loadChildren: 'app/feature/consulting#ConsultingModule'},
    ])
  ],
})
export class RootModule {

  constructor(overlay: Angular.OverlayContainer) {
    overlay
      .getContainerElement().classList
      .add('ascendant-root-theme');
  }

}
