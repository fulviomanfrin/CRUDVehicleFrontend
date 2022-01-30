import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // navigateToCrudForm(): void {
  //   this.router.navigate('/crud')
  // }


}
