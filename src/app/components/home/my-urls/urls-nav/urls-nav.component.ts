import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../../services/dataService/data.service';

@Component({
  selector: 'app-urls-nav',
  templateUrl: './urls-nav.component.html',
  styleUrls: ['./urls-nav.component.css']
})
export class UrlsNavComponent implements OnInit {
  activeTab = 'Articles';

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  saveCurrentTabStatus(status: string) {
    this.data.setCurrentTab(status);
    this.activeTab = this.data.getCurrentTab();
  }
}
