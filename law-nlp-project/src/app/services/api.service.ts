import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private http: HttpClient) {}

  sendText(text: string){
    const formData: any = new FormData();
    formData.append("input", text);
    
    return this.http.post(environment.apiBaseUrl + "/blackstonetest", formData)
    
  }
}
