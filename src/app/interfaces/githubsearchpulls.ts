import { GithubPulls } from './githubpulls';

export interface GithubSearchPulls {
  total_count: number
  incomplete_results: boolean
  items: GithubPulls[]
}
