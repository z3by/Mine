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


  const appRouts: Routes = [
    { path: 'signup', component: SignupComponent },
    { path: '', component: HomeComponent },
    { path: 'add', component: AddComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'friends', component: FriendsComponent },
    { path: 'friends/:id', component: FriendComponent },
    { path: 'myurls', component: MyUrlsComponent }
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
