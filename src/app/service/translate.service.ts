import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor() { }

    setLanguage(lang: string) {
    window.location.href = `/${lang}/`;
  }
}
