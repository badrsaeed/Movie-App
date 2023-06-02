import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public trendingMovies:any[] =[];
  public trendingTvShows: any[] = [];
  constructor(private trendingService:TrendingService){}

  ngOnInit(){
    this.trendingService.getTrending("all").subscribe((response)=>{
      this.trendingMovies = response.results.filter((item:any)=>{
        return item.media_type === "movie";
      })
      this.trendingTvShows = response.results.filter((item:any)=>{
        return item.media_type == "tv"
      })
    })
  }



}
