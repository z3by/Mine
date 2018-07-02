import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
status = {
  currentTab: 'Articles'
};

friends = [
  {
    name: 'friend one',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend two',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend three',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend four',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  },
  {
    name: 'friend five',
    image: 'https://www.infosecurityeurope.com/images/155_162_delegate_large.png?h=162&type=3&w=155&q=100&v=636595767522260796',
    job: 'friend job'
  }
];
  constructor() { }

  setCurrentTab(status: string) {
    this.status.currentTab = status;
    console.log('current tab is: ', this.status.currentTab);
  }
  getCurrentTab() {
    return this.status.currentTab;
  }
  getFriends() {
    return this.friends;
  }
  getFriendById(id: number) {
    return this.friends[id];
  }
}
