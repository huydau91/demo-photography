import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarTus: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openSideBar() {
    this.sideBarTus = !this.sideBarTus;
  }

  getChange(event: Boolean) {
    this.sideBarTus = event;
  }
}
