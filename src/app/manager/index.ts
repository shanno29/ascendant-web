import * as Angular from "../core/module/angular.module";
import {NetworkModule} from "./network";

@Angular.NgModule({
  imports: [NetworkModule],
  exports: [NetworkModule],
})
export class ProviderModule {}
