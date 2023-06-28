import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginUserForm!: FormGroup


  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router) {}

ngOnInit(): void {

  this.loginUserForm = this.formBuilder.group({
    email:[''],
    password:['']

  })

}

login(){
  this.http.get<any>("http://localhost:3000/registerUsers")
  .subscribe(res=>{

    const user = res.find((a:any)=>{
      return a.email ===  this.loginUserForm.value.email && a.email ===  a.password === this.loginUserForm.value.password

    });

    if(user){
        alert("login wthi  sucess");
        this.loginUserForm.reset();
        this.router.navigate(['home'])
    }else{
       alert("user is not registered")

    }
  },err=>{

    alert("is there something wrong")
  })

}

}


