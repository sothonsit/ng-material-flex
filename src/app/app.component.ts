import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { SideNavService } from './core/side-nav.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  mobileQuery: MediaQueryList;

  constructor(
    private media: MediaMatcher,
    private sidenavService: SideNavService
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
  }

  public ngOnInit(): void {
    // Store sidenav to service
    this.sidenavService
      .setSidenav(this.sidenav);
  }
}
