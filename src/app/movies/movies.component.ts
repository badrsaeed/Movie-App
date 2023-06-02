import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {

  public trendingMovies:any[] = [];

  constructor(private trendingService: TrendingService){}

  ngOnInit(){
     this.trendingService.getTrending("movie").subscribe((response)=>{
       this.trendingMovies =  response.results;
    })
  }
}
