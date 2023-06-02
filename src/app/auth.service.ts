import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  SignUp(registerData:any):Observable<any>
  {
    return this.http.post("https://routeegypt.herokuapp.com/signup", registerData);
  }
}
