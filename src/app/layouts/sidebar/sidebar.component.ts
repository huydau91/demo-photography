import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sideBarTus: Boolean =  false;
  @Output() changeTus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeSideBar(event) {
    this.sideBarTus = !this.sideBarTus;
    this.changeTus.emit();
  }
}
