import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  model = {};
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form) {
    this.model = form.value;
    console.log(form);
  }

  onChange(form) {
    console.log(form);
  }
}
