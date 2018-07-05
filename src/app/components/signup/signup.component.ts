import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserAuthService } from '../../services/userAuth/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  countries = ['syria', 'jordan', 'lebanon', 'egypt'];
  filterdCountries: string[];
  panelOpenState: boolean;


  constructor(private userAuth: UserAuthService) { }

  ngOnInit() {
  }

  onFilterCountry(country: string) {
    this.filterdCountries =  this.countries.filter((arrayCountry) => {
      return arrayCountry.includes(country.toLowerCase());
    });
  }

  onSubmit(form: NgForm) {
    this.userAuth.signUpNewUser(form.value)
    .subscribe(res => console.log(res),
      err => console.log(err));
  }

}
