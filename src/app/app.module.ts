import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HomeComponent } from './view/home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule 




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
