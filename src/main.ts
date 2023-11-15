import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(HttpClientModule)],
}).catch((err) => console.error(err));
function importProvidersFrom(HttpClientModule: any) {
  throw new Error('Function not implemented.');
}

