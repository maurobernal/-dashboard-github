import { Component, OnInit } from '@angular/core';
import { GithubPulls } from '@interfaces/githubpulls';
import { GithubRepos } from '@interfaces/githubrepos';
import { configGitHub } from 'enviroments.secrets';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-listrepos',
  templateUrl: './listrepos.component.html',
  styleUrls: ['./listrepos.component.sass'],
})
export class ListreposComponent implements OnInit {
  constructor(private readonly githubService : GithubService) {

  }

  repoUser$ :Observable<GithubRepos[]> = this.githubService.getRepo(`users/${configGitHub.user}/repos`);

  repoOrg$ :Observable<GithubRepos[]> = this.githubService.getRepo(`orgs/${configGitHub.org}/repos`);

  repoPulls$ : Observable<GithubPulls[]> = this.githubService.getPull(`repos/${configGitHub.org}/gag.api_operations/pulls?state=closed&sort=created&per_page=10&page=1`);

  listRepoUser: GithubRepos[] = [];

  listRepoOrg: GithubRepos[] = [];

  listPulls: GithubPulls[] = [];

  ngOnInit(): void {
    this.repoUser$.subscribe((s) => { this.listRepoUser = s; });
    this.repoOrg$.subscribe((s) => { this.listRepoOrg = s; });
    this.repoPulls$.subscribe((s) => { this.listPulls = s; });

    let arrayPull: object = [];
    this.githubService
      .getPull2(`repos/${configGitHub.org}/gag.api_operations/pulls?state=open&sort=created&per_page=10&page=1`)
      .subscribe((s) => { arrayPull = s; });
    console.log(arrayPull);
  }
}
