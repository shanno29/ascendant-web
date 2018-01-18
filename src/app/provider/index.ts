import * as Angular from "../core/module/angular.module";
import {Network} from "./network";

@Angular.NgModule({
  imports: [Angular.HttpClientModule],
  providers: [Network],
})
export class ProviderModule {}
