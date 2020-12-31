import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';


@Component({
  selector: 'app-toggle-sidenav',
  templateUrl: './toggle-sidenav.component.html',
  styleUrls: ['./toggle-sidenav.component.css']
})
export class ToggleSidenavComponent implements OnInit {
  @ViewChild('drawer')
  drawer: MatDrawer;

  showFiller = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  open(): void {
    this.drawer.toggle();
  }
}
