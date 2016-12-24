import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConnectionService} from './../../providers/connection-service/connection-service';

@Component({
  templateUrl: 'build/pages/generator-test/generator-test.html'
})
export class GeneratorTestPage {

  constructor(private nav: NavController, private connectionService: ConnectionService) {
    
  }


  buscaCEP(): void {
    
    this.connectionService.getCEP('60822620')
    .then((res) => {
      let json = res.json();
      console.log(json.localidade);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
