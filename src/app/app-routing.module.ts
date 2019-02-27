import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegiterComponent } from './regiter/regiter.component';
import { LoginComponent } from './login/login.component';
import { ForgetComponent } from './forget/forget.component';
import { CardComponent } from './card/card.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent  },
  { path: 'register', component: RegiterComponent },
  { path: 'forget', component: ForgetComponent },
  { path: 'home', component: CardComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
