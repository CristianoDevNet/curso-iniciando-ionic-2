import { Component } from '@angular/core';
import { NavController, Alert } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {

  user: string;

  constructor(private nav: NavController) {}

  showAlert() {
    let alert = Alert.create({
      title: 'Nome do usuário',
      message: 'Digite seu nome.',
      inputs: [
        {
          name: 'nome',
          placeholder: 'Seu nome',
          
        }
      ],
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Ok',
          handler: (data)=>{
            this.user = data.nome;
          }
        }
      ],
    });

    this.nav.present(alert);
  }
}
