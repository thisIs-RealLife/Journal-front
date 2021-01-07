import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';


@Component({
  selector: 'app-toggle-sidenav',
  templateUrl: './toggle-sidenav.component.html',
  styleUrls: ['./toggle-sidenav.component.css']
})
export class ToggleSidenavComponent implements OnInit {
  @ViewChild('drawer')
  drawer: MatDrawer;
  flag: boolean;

  @HostListener('window:scroll', ['$event'])
  doSomething(event: any): void {
    if (window.pageYOffset > 64) {
      this.flag = true;
    } else if (window.pageYOffset < 65){
      this.flag = false;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }


  open(): void {
    this.drawer.toggle();
    const flaggg = this.drawer.opened;
  }
}
