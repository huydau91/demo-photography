import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let headerSticky = false;
    window.onscroll = function() {
      if (window.scrollY > 100) {
        headerSticky = true;
      }
    };
  }

}
