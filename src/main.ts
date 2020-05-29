import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

// Call the element loader after the platform has been bootstrapped
if (environment.production) {
  enableProdMode();
}
fetch('environment.json').then(res => res.json()).then((e => {
  console.log(e);
  platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => defineCustomElements(window))
    .catch(err => console.error(err));
}))

