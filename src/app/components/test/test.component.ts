import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {
constructor(private githubService : GithubService){

  console.log( "observable",this.githubService.getRepo());

  console.log( this.githubService.getRepo().subscribe(s => console.log ("subscribe",s)));
  
}

resultado$ :Observable<Object> = this.githubService.getRepo();

  ngOnInit(): void {
  
  }


}

