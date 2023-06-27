import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email!: string;
  senha!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const credenciais = {
      email: this.email,
      senha: this.senha
    };

    this.http.post('http://localhost:3000/login', credenciais).subscribe(response => {
      console.log('Login realizado com sucesso!');
    });
  }

}
