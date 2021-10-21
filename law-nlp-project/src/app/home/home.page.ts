import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string;
  constructor(private api: ApiService, private router: Router) {}

  onSubmit(){
    //route text to results page
      this.router.navigate(["results", this.text]);
      
  }


}
