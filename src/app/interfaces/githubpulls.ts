export interface GithubPulls {
  id: number
  title: string
  description: string
  url: string
  html_url: string
  name: string
  number: number
  created_at: Date
  merged_at: Date
  state: string
  repo : any
  properties : any
  base: any
  assignees: any[]
  labels : any[]
}
