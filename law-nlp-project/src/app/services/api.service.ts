import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private http: HttpClient) {}

  sendText(text: string){

    const data = {input: text};
    return this.http.post(environment.apiBaseUrl + "/blackstonetest", data, { responseType: 'text' })
    
  }
}
