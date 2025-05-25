import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sharedspinner',
  standalone: false,
  templateUrl: './sharedspinner.component.html',
  styleUrl: './sharedspinner.component.css'
})
export class SharedspinnerComponent {
  @Input() isLoading:any;
}
