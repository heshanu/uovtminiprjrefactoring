import { Component, Inject, OnInit } from '@angular/core';
import { ThemeService } from '../../service/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-theme-toggle',
  standalone: false,
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent{
  
  currentTheme$: Observable<string>;
  
  constructor(private themeService: ThemeService) {
    this.currentTheme$ = this.themeService.currentTheme$;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
