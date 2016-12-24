import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {GeneratorTestPage} from './pages/generator-test/generator-test';
import {ConnectionService} from './providers/connection-service/connection-service';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  pages: Array<{component: any, title: string, icon: string}>;

  constructor(platform: Platform, public menuCtrl: MenuController) {

    this.pages = [
      {component: HomePage, title: "Home", icon: "home"},
      {component: MenuTestPage, title: "Menu Test", icon: "menu"},
      {component: GeneratorTestPage, title: "Generator Test", icon: "analytics"}
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page: any, menuSide: string): void {
    this.rootPage = page.component;
    this.menuCtrl.close(menuSide);
  }
}

ionicBootstrap(MyApp, [ConnectionService], {
  menuType: 'push',
  platforms: {
    ios: {
      menuType: 'overlay',
    }
  }
});
