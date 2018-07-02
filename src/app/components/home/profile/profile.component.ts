import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userInfo = {
  name: 'user name',
  image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
  nationality: 'natioality',
  date: 'date',
  gender: 'gender',
  job: 'job',
  city: 'city',
  phone: '097365253',
  email: 'email@gmail.com'
};
  constructor() { }

  ngOnInit() {
  }

}
