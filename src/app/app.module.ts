import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FriendComponent } from './components/home/friends/friend/friend.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { AddComponent } from './components/home/add/add.component';
import { MyUrlsComponent } from './components/home/my-urls/my-urls.component';
import { HomeComponent } from './components/home/home.component';
import { UrlsNavComponent } from './components/home/my-urls/urls-nav/urls-nav.component';
import { UrlComponent } from './components/home/my-urls/url/url.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { FriendsComponent } from './components/home/friends/friends.component';
import { CategoryComponent } from './components/home/my-urls/category/category.component';
import { FooterComponent } from './components/footer/footer.component';

import { DataService } from './services/dataService/data.service';
import { RoutingModule } from './modules/routing/routing.module';
import { MaterialModule } from './modules/material/material.module';
import { UserAuthService } from './services/userAuth/user-auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    MyUrlsComponent,
    HomeComponent,
    UrlsNavComponent,
    UrlComponent,
    ProfileComponent,
    FriendsComponent,
    CategoryComponent,
    FooterComponent,
    FriendComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    DataService,
    UserAuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
