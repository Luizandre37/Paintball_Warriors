import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


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




  constructor(private _formBuilder: FormBuilder,private http: HttpClient  ){}

  onSubmit() {
    const newUser = {
      name: this.name,
      email: this.email,
      passaword: this.rg,
      confirmation: this.confirmation,
      re: this.rg,
      cpf:this.cpf


    }
 }

 register() {
  if (this.passaword === this.confirmation) {

  } else {

  }
}

  }

