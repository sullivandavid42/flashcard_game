import { Component } from '@angular/core';

import { Platform, IonMenu } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesMenu = [
    {
      title: 'Accueil',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profil',
      url: '/profil',
      icon: 'person'
    },
    {
      title: 'Categories',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Gérer mes cartes',
      url: '/carte',
      icon: 'clipboard'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }

  closeMenu(menu: IonMenu) {
    console.log('HELLO');
    menu.toggle();
  }
}
