import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { githubPulls } from 'src/app/interfaces/github-pulls';
import { githubRepos } from 'src/app/interfaces/github-repos';
import { GithubService } from 'src/app/services/github.service';
import  { configGitHub } from '../../../../enviroments.secrets'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
constructor(private githubService : GithubService){
}
repoUser$ :Observable<githubRepos[]> = this.githubService.getRepo(`users/${configGitHub.user}/repos`);
repoOrg$ :Observable<githubRepos[]> = this.githubService.getRepo(`orgs/${configGitHub.org}/repos`);
repoPulls$ : Observable<githubPulls[]> = this.githubService.getPull(`repos/${configGitHub.org}/gag.api_operations/pulls?state=close&sort=created&per_page=10&page=1`);

listRepoUser: githubRepos[] = [];
listRepoOrg: githubRepos[] = [];
listPulls: githubPulls[] = [];

  ngOnInit(): void {
    this.repoUser$.subscribe( s => this.listRepoUser = s );
    this.repoOrg$.subscribe( s => this.listRepoOrg = s );
    this.repoPulls$.subscribe( s => this.listPulls = s );
  }



}


