import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'backoffice-store';
  isAuthenticated!: boolean ;

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    const nick = localStorage.getItem('username');
    const password = localStorage.getItem('password');

    this.isAuthenticated = !!nick && !!password;

    if (this.isAuthenticated){
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
