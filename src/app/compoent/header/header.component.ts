import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThemeService } from '../../service/theme.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: false
})
export class HeaderComponent {}

