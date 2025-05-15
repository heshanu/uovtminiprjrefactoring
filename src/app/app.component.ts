import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.reducer';
import { loadCustomers } from './store/customers/customer-id.actions';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private store: Store<AppState>, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.store.dispatch(loadCustomers());
    this.themeService.currentTheme$.subscribe(theme => {
      document.body.className = theme + '-theme';
    
    })
  }
}
