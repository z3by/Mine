import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../components/home/home.component';
import { SignupComponent } from '../../components/signup/signup.component';
import { ProfileComponent } from '../../components/home/profile/profile.component';
import { AddComponent } from '../../components/home/add/add.component';
import { FriendsComponent } from '../../components/home/friends/friends.component';
import { FriendComponent } from '../../components/home/friends/friend/friend.component';
import { MyUrlsComponent } from '../../components/home/my-urls/my-urls.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../services/auth-guard/auth.guard';
import { LoginComponent } from '../../components/login/login.component';


  const appRouts: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
    { path: 'add', component: AddComponent, canActivate: [ AuthGuard ] },
    { path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ] },
    { path: 'friends', component: FriendsComponent, canActivate: [ AuthGuard ] },
    { path: 'friends/:id', component: FriendComponent, canActivate: [ AuthGuard ] },
    { path: 'myurls', component: MyUrlsComponent, canActivate: [ AuthGuard ] }
  ];


  @NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule],
  declarations: []
})





export class RoutingModule { }
