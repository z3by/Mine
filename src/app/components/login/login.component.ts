import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/userAuth/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: ''
  };

  constructor(private auth: UserAuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.user)
      .subscribe(
        res => {
          this.saveToken(res['token']);
          this.router.navigate(['/']);
        },
        err => {
          console.log(err);
        });
  }

  saveToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
  }

}
