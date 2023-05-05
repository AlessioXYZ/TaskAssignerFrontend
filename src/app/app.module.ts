import {NgModule, isDevMode} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {IndexModule} from "./index/index.module";
import {ServiceWorkerModule} from '@angular/service-worker';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {WebAppModule} from "./web-app/web-app.module";
import {TokenInterceptor} from "./network/interceptors/token-interceptor";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from "@angular/fire/compat";
import {MessagingService} from "./network/firebase/messaging.service";
import {environment} from "../environments/environment.development";
import {AngularFireMessagingModule} from "@angular/fire/compat/messaging";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot([]),
    IndexModule,
    WebAppModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
  ],
  providers: [
    {multi: true, provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor},
    MessagingService
  ],
  bootstrap: [AppComponent],

})
export class AppModule {
}
