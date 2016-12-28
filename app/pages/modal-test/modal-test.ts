import { Component } from '@angular/core';
import { NavController, Modal } from 'ionic-angular';
import { ModalLoginPage } from './../modal-login/modal-login'

@Component({
  templateUrl: 'build/pages/modal-test/modal-test.html',
})
export class ModalTestPage {
 
  constructor(private nav: NavController) {}

  openModal() {
    let modal = Modal.create(ModalLoginPage, {
      action: {
        test: 'olá',
        value: true
      }
    });

    modal.onDismiss((data)=>{
      console.log('Dados do usuário: ', data);
    });

    this.nav.present(modal);
  }
}
