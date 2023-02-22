import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  webApiUri = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  getNews(): any {
    return this.http
      .get('http://localhost:8000/news')
      
  }
}
