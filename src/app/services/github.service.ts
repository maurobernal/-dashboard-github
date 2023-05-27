import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubRepos } from '../interfaces/githubrepos';
import { GithubPulls } from '../interfaces/githubpulls';
import HttpClientBase from './httpclientbase';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  private readonly httpClientBase: HttpClientBase;

  constructor(private readonly http: HttpClient) {
    this.httpClientBase = new HttpClientBase(http, 'https://api.github.com/');
  }

  getRepo(entity: string): Observable<GithubRepos[]> {
    return this.httpClientBase.get<GithubRepos[]>(entity);
  }

  getPull(entity: string): Observable<GithubPulls[]> {
    return this.httpClientBase.get<GithubPulls[]>(entity);
  }

  getPull2(entity: string): Observable<Object> {
    return this.httpClientBase.get<Object>(entity);
  }
}
