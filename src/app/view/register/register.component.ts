import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  name!: string;
  email!: string;
  nascimento!:number;
  rg!: any;
  cpf!: number;
  passaword!: any;
  confirmation!: any;
  address!:any;
  telephone!:number;
  date!:number;

  Gender = this._formBuilder.group({
    feminine: false,
    masculine: false,
    other: false,

  });

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  public registerUsersForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder,private http: HttpClient, private router: Router ){}
  ngOnInit(): void {

  this.registerUsersForm = this._formBuilder.group({

    name:[''],
    email: [''],
    address:[''],
    passaword: [''],
    confirmation: [''],
    re: [''],
    cpf: [''],
    date: [''],

  })

    }


 register() {
    this.http.post<any>("http://localhost:3000/registerUsers", this.registerUsersForm.value)
    .subscribe(res =>{

      alert("register sucessfull")

      this.registerUsersForm.reset();
      this.router.navigate(['login'])

    },err=>{
      alert("something is wrong try again later!!!!")

    })
}

  }

