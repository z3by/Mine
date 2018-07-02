import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/dataService/data.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
friends = [];
  constructor(private data: DataService) { }

  ngOnInit() {
    this.friends = this.data.getFriends();
  }

}
