import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import {RootModule} from './app/feature/shared/root';

if (environment.production) { enableProdMode(); }

platformBrowserDynamic()
  .bootstrapModule(RootModule)
  .then(ref => {
    if (window['ngRef']) { window['ngRef'].destroy(); }
    window['ngRef'] = ref;
  })
  .catch(err => console.error(err));
