import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string;
  constructor(private api: ApiService) {}

  async onSubmit(){
      
      const result = await this.api.sendText(this.text).toPromise();
      document.getElementById("results").innerHTML = result;
      console.log(result);
      

  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
