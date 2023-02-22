import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProceduriService {
  webApiUri = 'http://localhost:8000';
  constructor(private http: HttpClient) {}

  getProceduri(): any {
    return this.http
      .get('http://localhost:8000/proceduri')
      
  }

  getPdf(id:string): any {
    let apiFullURL =`${this.webApiUri}/file_procedura?id=${id}`;
    return this.http.get(apiFullURL,{observe:'response',responseType:'blob'})
  }


}
