import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {


 rawText: string ;
 result: string;

  constructor(private route: ActivatedRoute, private api: ApiService) {
  
   }

  async ngOnInit() {
   
    //get data param from route
    this.route.params.subscribe((params: Params) => this.rawText = params['data']);

    //send rawtext to api
    this.result = await this.api.sendText(this.rawText).toPromise();

    //display processed text on results page
    document.getElementById("results").innerHTML = this.result;
    
  }

  //get content for button functions
  getContent() {
    return document.querySelector('ion-content');
  }

  //scroll to top button
  goToTop(){
    this.getContent().scrollToTop(500);
  }

}
