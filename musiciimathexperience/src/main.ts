import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    provideIonicAngular(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({"projectId":"math2musicexperience","appId":"1:195624187868:web:e0716ac61d0965ba1dc119","storageBucket":"math2musicexperience.appspot.com","apiKey":"AIzaSyDJjqMKm5baK9xCoc8AaKRX6j1JzQsPfFI","authDomain":"math2musicexperience.firebaseapp.com","messagingSenderId":"195624187868","measurementId":"G-5KSLS1454L"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
});
