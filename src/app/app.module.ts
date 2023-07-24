import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Shared/header/header.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RegisterAuthComponent } from './views/register-auth/register-auth.component';
import { HomeComponent } from './views/home/home.component';
import { HomeProductsComponent } from './views/home-products/home-products.component';
import { BannerComponent } from './banner/banner.component';
import { CardComponent } from './card/card.component';
import { BloodAnimationComponent } from './views/blood-animation/blood-animation.component';
import { CardListComponent } from './views/card-list/card-list.component';
import { CardProductComponent } from './views/card-product/card-product.component';
;








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterAuthComponent,
    HomeComponent,
    HomeProductsComponent,
    BannerComponent,
    CardComponent,
    BloodAnimationComponent,
    CardListComponent,
    CardProductComponent
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
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    FlexLayoutModule,
    MatGridListModule ,
    MatIconModule,
    ToastrModule.forRoot()




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
