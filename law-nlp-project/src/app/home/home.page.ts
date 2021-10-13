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
      this.getContent().scrollToPoint(0, 600);
  }

  onClear(){
    document.getElementById("results").innerHTML = null;
  }

  goToTop(){
    this.getContent().scrollToTop(500);
  }

  getContent() {
    return document.querySelector('ion-content');
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
