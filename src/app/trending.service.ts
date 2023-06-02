import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {

  constructor(private http:HttpClient) { }

  getTrending(mediaType: any) : Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=f52d57defdd18abeac05cb61d44a0a42`)
  }
}
