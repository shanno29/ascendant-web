import * as Angular from "../core/module/angular.module"
import {HomeModule} from "./home";
import {AboutModule} from "./about";
import {ContactModule} from "./contact";
import {FormsModule} from "./forms";
import {ConsultingModule} from "./consulting";
import {FooterModule} from "../core/shared/footer";
import {ToolbarModule} from "../core/shared/toolbar";

@Angular.NgModule({
  imports: [
    HomeModule,
    AboutModule,
    ConsultingModule,
    FormsModule,
    ContactModule,
    ToolbarModule,
    FooterModule,
  ],
  exports: [
    HomeModule,
    AboutModule,
    ConsultingModule,
    FormsModule,
    ContactModule,
    ToolbarModule,
    FooterModule,
  ]
})
export class FeatureModule {}
