import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {ToggleSidenavComponent} from './toggle-sidenav/toggle-sidenav.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'Journal';
  @ViewChild(ToggleSidenavComponent)
  toggleSideNavComponent: ToggleSidenavComponent;



  open(): void{

  }

  ngOnInit(): void {
  }

}
