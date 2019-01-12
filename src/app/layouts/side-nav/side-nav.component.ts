import { Component, OnInit, Input } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Input() mobileQuery: MediaQueryList;

  fillerNav = ['Dashboard', 'Creator'];

  constructor() {
  }

  ngOnInit() {
  }

}
