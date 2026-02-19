import { AuthServiceCall } from './../../service/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../service/theme.service';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../service/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent implements OnInit{

  constructor(private authService: AuthServiceCall,
  private languageService: LanguageService) {
   this.languageService.currentLanguage$
      .subscribe(lang => {
        this.currentLang = lang;
        console.log('Language changed:', lang);
      });
   }
      // Mobile menu toggle state
  isMenuOpen: boolean = false;
   currentLang = '';

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
    }
    return false;
  }

  changeLang(lang: string) {
    //this.translate.use(lang);
    this.languageService.setLanguage(lang);
  }

}

