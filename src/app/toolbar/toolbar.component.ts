import {Component, OnInit, ViewChild} from '@angular/core';
import {ToggleSidenavComponent} from '../toggle-sidenav/toggle-sidenav.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @ViewChild(ToggleSidenavComponent)
  toggleSideNav: ToggleSidenavComponent;

  constructor() { }

  ngOnInit(): void {
  }

  open(): void {
    this.toggleSideNav.open();
  }
}
