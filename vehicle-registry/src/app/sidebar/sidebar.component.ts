import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCrudForm(): void {
    this.navigate('crud');
  }

  navigateDashboard(): void {
    this.navigate('dashboard');
  }

  navigateToList(): void {
    this.navigate('list');
  }

  navigate(url: string) {
    this.router.navigateByUrl(url)
  }

}

