import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
//Pages
import {HomePage} from './pages/home/home';
import {MenuTestPage} from './pages/menu-test/menu-test';
import {AlertPage} from './pages/alert/alert';
import {ButtonsTestPage} from './pages/buttons-test/buttons-test';
import {CardTestPage} from './pages/card-test/card-test';
import {InputsTestPage} from './pages/inputs-test/inputs-test';
import {ListTestPage} from './pages/list-test/list-test';
import {GridTestPage} from './pages/grid-test/grid-test';
//Other resources
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
      {component: GeneratorTestPage, title: "Generator Test", icon: "analytics"},
      {component: AlertPage, title: "Alert Page", icon: "alert"},
      {component: ButtonsTestPage, title: "Buttons Test", icon: "code-download"},
      {component: CardTestPage, title: "Card Test", icon: "card"},
      {component: InputsTestPage, title: "Inputs Test", icon: "bonfire"},
      {component: ListTestPage, title: "List Test", icon: "list-box"},
      {component: GridTestPage, title: "Grid Test", icon: "apps"}
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
  // menuType: 'push',
  // platforms: {
  //   ios: {
  //     menuType: 'overlay',
  //   }
  // }
});
