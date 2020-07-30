import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateWishComponent } from './create-wish/create-wish.component';
import { ViewWishComponent } from './view-wish/view-wish.component';
import { OpenLastComponent } from './open-last/open-last.component';
import { auth } from 'firebase';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'wish', component:CreateWishComponent},
  {path:'view', component:ViewWishComponent},
  {path:'open-last', component:OpenLastComponent},
  {path:'auth',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
