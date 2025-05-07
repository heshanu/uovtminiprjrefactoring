import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { provideAuth0 } from '@auth0/auth0-angular';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
  providers: [
    provideAuth0({
                domain: 'heshan404.us.auth0.com',
                clientId: 'v3ZJkkusUt3rp8e3W1gpZWeiyFWLGh1t',
                authorizationParams: {
                  redirect_uri: window.location.origin
                }

    })
  ]

})
  .catch(err => console.error(err));
