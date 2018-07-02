import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../../services/dataService/data.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data = [
    {
      owner: 'owner name',
      image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
      name: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      body: 'https://web.facebook.com/?_rdc=1&_rdr',
      category: 'Articles'
    },
    {
      owner: 'owner name',
      image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
      name: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      body: 'https://web.facebook.com/?_rdc=1&_rdr',
      category: 'Videos'
    },
    {
      owner: 'owner name',
      image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
      name: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      body: 'https://web.facebook.com/?_rdc=1&_rdr',
      category: 'Music'
    },
    {
      owner: 'owner name',
      image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
      name: 'Card title',
      description: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      body: 'https://web.facebook.com/?_rdc=1&_rdr',
      category: 'Photos'
    }
  ];
  @Input() currentTab: string;
  urls = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.urls = this.data.filter((e) => {
      return e.category === this.currentTab;
    });
  }

}
