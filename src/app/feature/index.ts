import {HomeModule} from './home';
import {AboutModule} from './about';
import {ContactModule} from './contact';
import {FormsModule} from './forms';
import {ConsultingModule} from './consulting';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    HomeModule,
    AboutModule,
    ConsultingModule,
    FormsModule,
    ContactModule,
  ],
  exports: [
    HomeModule,
    AboutModule,
    ConsultingModule,
    FormsModule,
    ContactModule,
  ]
})
export class FeatureModule {}
