import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegiterComponent } from './regiter/regiter.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { CardComponent } from './card/card.component';
import { ForgetComponent } from './forget/forget.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleService } from './article.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiterComponent,
    NavBarComponent,
    SlideBarComponent,
    CardComponent,
    ForgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
