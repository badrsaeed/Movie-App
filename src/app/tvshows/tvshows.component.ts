import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  public trendingTvShows : any[] = [];

  constructor(private trendingService:TrendingService){}

  ngOnInit(){
    this.trendingService.getTrending("tv").subscribe((response)=>{
      this.trendingTvShows = response.results;
    })
  }
}
