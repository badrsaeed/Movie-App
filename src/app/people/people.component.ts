import { Component } from '@angular/core';
import { TrendingService } from '../trending.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {

  public trendingPeople:any[] = [];

  constructor(private trendingService : TrendingService){}

  ngOnInit(){
    this.trendingService.getTrending("people").subscribe((response)=>{
      this.trendingPeople = response.results;
    })
    console.log(this.trendingPeople);

  }
}
