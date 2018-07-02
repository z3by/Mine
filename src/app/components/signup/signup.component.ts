import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  countries = ['syria', 'jordan', 'lebanon', 'egypt'];
  filterdCountries: string[];
  panelOpenState: boolean;
  constructor() { }

  ngOnInit() {
  }

  onFilterCountry(country: string) {
    this.filterdCountries =  this.countries.filter((arrayCountry) => {
      return arrayCountry.includes(country.toLowerCase());
    });
  }

}
