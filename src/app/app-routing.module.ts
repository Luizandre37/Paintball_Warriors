import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
