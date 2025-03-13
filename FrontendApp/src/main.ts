import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap using the module-based approach
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
