import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {

    // BehaviorSubject to store current language
  private languageSubject = new BehaviorSubject<string>('en');

  // Observable for components to subscribe
  currentLanguage$ = this.languageSubject.asObservable();

  constructor(private translate: NgxTranslateService) {

    // supported languages
    this.translate.addLangs(['en', 'si']);

    // default language
    const savedLang = localStorage.getItem('lang') || 'en';

    this.setLanguage(savedLang);
  }

  setLanguage(lang: string) {

    this.translate.use(lang);

    // update BehaviorSubject
    this.languageSubject.next(lang);

    // save to localStorage
    localStorage.setItem('lang', lang);
  }

  getCurrentLanguage(): string {
    return this.languageSubject.value;
  }
}
