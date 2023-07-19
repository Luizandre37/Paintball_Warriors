import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { signUp } from 'src/data-type';

@Component({
  selector: 'app-register-auth',
  templateUrl: './register-auth.component.html',
  styleUrls: ['./register-auth.component.scss']
})
export class RegisterAuthComponent implements OnInit {

  showLogin=false;
  authError:String='';

  constructor(private RegisterAth: AuthService) {}

  ngOnInit(): void {

  }

  signUp(data: signUp): void {
    console.warn(data);
    this.RegisterAth.userSignUp(data);
  }
  login(data: signUp): void {
    this.RegisterAth.userLogin(data);
    this.RegisterAth.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError="Email or password is not correct";
      }
    })

  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }

}
