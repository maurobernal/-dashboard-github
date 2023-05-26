import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { githubRepos } from '../interfaces/github-repos';
import httpClientBase from './httpClientBase';
import { githubPulls } from '../interfaces/github-pulls';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private readonly  httpClientBase : httpClientBase;
  constructor(private http: HttpClient) {
    this.httpClientBase = new httpClientBase(http , 'https://api.github.com/');
  }


  getRepo(entity: string):Observable<githubRepos[]>{
      return  this.httpClientBase.get<githubRepos[]>(entity);
  }

  getPull(entity: string):Observable<githubPulls[]>{
    return this.httpClientBase.get<githubPulls[]>(entity);
  }

}
