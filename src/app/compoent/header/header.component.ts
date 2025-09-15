import { AuthServiceCall } from './../../service/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../service/theme.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthServiceCall) { }
      // Mobile menu toggle state
  isMenuOpen: boolean = false;

  // Control visibility of navigation links (if needed)
  //isShow: boolean = true;


    ngOnInit(): void {
       this.isShow=this.authService.isAuthenticated$(localStorage.getItem("username"),localStorage.getItem("password"));
    }

    isShow!: Observable<boolean>;

    logOut(): void {
        this.authService.logout();
  }

  isLoginLabel():boolean {
    if (localStorage.getItem("username") || localStorage.getItem("password")) {
      return true;
    } return false;
  }

}

