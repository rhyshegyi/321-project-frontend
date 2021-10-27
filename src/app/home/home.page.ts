import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  text: string;
  constructor(private router: Router) {} // API to send data to server, router to send text to new page

  onSubmit(){
    //route text to results page
      this.router.navigate(["results", this.text]);
      
  }


}
