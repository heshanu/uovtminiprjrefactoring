import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  
  private currentTheme = new BehaviorSubject<string>('light');
  public currentTheme$ = this.currentTheme.asObservable();

  constructor() {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' || 'light';
    this.setTheme(savedTheme);
  }

  public toggleTheme(): void {
    const newTheme = this.currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private setTheme(theme: string): void {
    this.currentTheme.next(theme);
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  private applyTheme(theme:string): void {
    // Remove both theme classes first
    document.body.classList.remove('light-theme', 'dark-theme');
    // Add the current theme class
    document.body.classList.add(`${theme}-theme`);
  }
}
