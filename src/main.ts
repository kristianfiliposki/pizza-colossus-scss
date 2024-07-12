import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/body/app.modules';
import { provideRouter } from '@angular/router';
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));;
