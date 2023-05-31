import { Component, Input } from '@angular/core';
import { GithubPulls } from '@interfaces/githubpulls';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.sass'],
})
export class ReposComponent {
  @Input() pull : GithubPulls | undefined;
}
