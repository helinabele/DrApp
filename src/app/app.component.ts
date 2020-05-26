import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'መነሻ',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ዝርዝር',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'አካውንት',
      url: '/login',
      icon: 'person'
    },
    {
      title:'መቼት',
      url:'/setting',
      icon:'cog'
    },
    {
      title: 'መገምገሚያ',
      url:'/review',
      icon: 'star'
    }    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.authService.authenticationState.subscribe(state => {
        if (state){
          this.router.navigate(['members', 'dashboard'])

        } 
        if(state==false) {
          this.router.navigate(['login'])
        }
      })
    });
  }
}
