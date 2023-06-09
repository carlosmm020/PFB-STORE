import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isAuthenticated!: boolean;
  constructor(
    private router: Router
   ){}

  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    this.isAuthenticated = !!(username && password);
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.router.navigate(['/login']);
    }

}
