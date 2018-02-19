import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from '../dev/app/app.module';

if ( process.env.ENV === 'production' ) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
