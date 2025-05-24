import { Component, OnInit } from '@angular/core';
import { AuthServiceCall } from '../../service/auth.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent implements OnInit {
  
  constructor(private authService: AuthServiceCall) { 

  }
  show!: boolean;

  homePageImages:any[]=[
    "rect1.png",,
    "rect2.png",
    "rect3.png"
  ];

  getAuth(): void { 
   this.show= this.authService.isAuthenticated$(localStorage.getItem("username"),localStorage.getItem("password"));
  }

  ngOnInit(): void {
    this.getAuth();
  }
}
