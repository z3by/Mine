import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {

  @Input() model: {
    owner: string,
    image: string,
    name: string,
    description: string,
    body: string
  };
  constructor() { }

  ngOnInit() {
  }

}
