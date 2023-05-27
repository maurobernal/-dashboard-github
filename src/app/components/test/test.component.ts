import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubPulls } from 'src/app/interfaces/githubpulls';
import { GithubRepos } from 'src/app/interfaces/githubrepos';
import { GithubService } from 'src/app/services/github.service';
import { configGitHub } from '../../../../enviroments.secrets';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass'],
})
export class TestComponent implements OnInit {
  constructor(private readonly githubService : GithubService) {
  }

  repoUser$ :Observable<GithubRepos[]> = this.githubService.getRepo(`users/${configGitHub.user}/repos`);

  repoOrg$ :Observable<GithubRepos[]> = this.githubService.getRepo(`orgs/${configGitHub.org}/repos`);

  repoPulls$ : Observable<GithubPulls[]> = this.githubService.getPull(`repos/${configGitHub.org}/gag.api_operations/pulls?state=close&sort=created&per_page=10&page=1`);

  listRepoUser: GithubRepos[] = [];

  listRepoOrg: GithubRepos[] = [];

  listPulls: GithubPulls[] = [];

  ngOnInit(): void {
    this.repoUser$.subscribe((s) => { this.listRepoUser = s; });
    this.repoOrg$.subscribe((s) => { this.listRepoOrg = s; });
    this.repoPulls$.subscribe((s) => { this.listPulls = s; });
  }
}
