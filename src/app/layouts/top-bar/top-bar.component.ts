import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/core/side-nav.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(
    private sideNavService: SideNavService
  ) { }

  ngOnInit() {
  }

  /**
   * Method to toggle application sidenav.
   */
  toggleSidenav() {
    this.sideNavService
      .toggle()
      .then(() => { });
  }

}
