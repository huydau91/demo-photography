import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  let headerSticky = false;

  constructor() { }

  ngOnInit() {
    window.onscroll = function() {
      if (window.scrollY > 100) {
        headerSticky = true;
      }
    };
  }

}
