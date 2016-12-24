import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ConnectionService {
  
  //data: any;

  constructor(private http: Http) {
    //this.data = null;
  }

  getCEP(cep: string) {
    return this.http.get('https://viacep.com.br/ws/' + cep.trim() + '/json/').toPromise();
  }

  // load() {
  //   if (this.data) {
  //     // already loaded data
  //     return Promise.resolve(this.data);
  //   }

  //   // don't have the data yet
  //   return new Promise(resolve => {
  //     // We're using Angular Http provider to request the data,
  //     // then on the response it'll map the JSON data to a parsed JS object.
  //     // Next we process the data and resolve the promise with the new data.
  //     this.http.get('https://viacep.com.br/ws/60822620/json/')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         // we've got back the raw data, now generate the core schedule data
  //         // and save the data for later reference
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
  // }
}

