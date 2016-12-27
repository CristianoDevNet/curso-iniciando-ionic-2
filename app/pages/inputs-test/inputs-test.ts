import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/inputs-test/inputs-test.html',
})
export class InputsTestPage {

  login: string;
  senha: string;

  constructor(private nav: NavController) {}

  entrar() {
    let texto = ('Login: ' + this.login + ', Senha: ' + this.senha);
    let alert = Alert.create({
      title: 'Entrando...',
      message: texto
    });
    this.nav.present(alert);
  }
}
