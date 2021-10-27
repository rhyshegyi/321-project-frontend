import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { NoSanitizePipe } from './../no-sanitize.pipe';

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
    const result = await this.api.sendText(this.rawText).toPromise();

    //get processed text
    this.result = result;

    //display processed text on results page
    document.getElementById("results").innerHTML = result;
    
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