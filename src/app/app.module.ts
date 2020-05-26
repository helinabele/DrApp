import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {IonicStorageModule } from '@ionic/storage';
import { AuthModule } from './auth/auth.module';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({ mode: 'md' }),
    AppRoutingModule,
    AuthModule,
    IonicStorageModule.forRoot(),
    /* AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule */
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    //{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //{ provide: FirebaseOptionsToken, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
