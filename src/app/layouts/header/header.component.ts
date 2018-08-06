import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() sideBarChange = new EventEmitter();
  sideBarTus = 'open';

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (this.sideBarTus === 'open') {
      this.sideBarTus = 'close';
    } else {
      this.sideBarTus = 'open';
    }
    this.sideBarChange.emit(this.sideBarTus);
  }
}
