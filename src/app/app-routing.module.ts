import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterAuthComponent } from './views/register-auth/register-auth.component';
import { HomeComponent } from './views/home/home.component';
import { HomeProductsComponent } from './views/home-products/home-products.component';
import { CardComponent } from './card/card.component';
import { BannerComponent } from './banner/banner.component';
import { AuthGuard } from './guard/auth.guard';
import { BloodAnimationComponent } from './views/blood-animation/blood-animation.component';





const routes: Routes = [
  {component: HomeComponent,path:'' },
  {component: CardComponent,path:'card' },
  {component: BannerComponent,path:'card' },
  {component: BloodAnimationComponent,path:'Blood' },
  {component:RegisterAuthComponent,path:'auth-register'},
  {component:HomeProductsComponent ,path:'home-products',canActivate:[AuthGuard]},

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
