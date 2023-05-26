import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  constructor(private http: HttpClient) { 
  }

  getRepo():Observable<Object>{
    const BaseAddress  = 'https://api.github.com/';
    const Endpoint = 'repos/globalassistgroup/gag.api_operations/pulls?state=close&sort=created&per_page=10&page=1'
    const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'Bearer '
    })};
    
    return this.http.get(BaseAddress + Endpoint, httpOptions );
  }

}
