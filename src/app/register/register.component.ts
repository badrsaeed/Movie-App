import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  public registerForm = new FormGroup({
    'first_name': new FormControl(null,[Validators.minLength(3), Validators.required]),
    'last_name': new FormControl(null, [Validators.minLength(3), Validators.required]),
    'email': new FormControl(null, [Validators.email, Validators.required]),
    'password': new FormControl(null, [Validators.minLength(6), Validators.required]),
  });



  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){}
  public register(){
    if(this.registerForm.invalid)
      return;

    this.authService.SignUp(this.registerForm.value).subscribe((data)=>{
      if(data.message == 'success')
      {
        this.router.navigateByUrl('/login');
      }
      else{
        alert("no")
      }
    })


  }


}
