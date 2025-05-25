import { Component, Input, OnInit } from '@angular/core';
import { TouristAttractionInterface } from '../../../model/touristAttraction.interface';

@Component({
  selector: 'app-cardforplaces',
  standalone: false,
  templateUrl: './cardforplaces.component.html',
  styleUrl: './cardforplaces.component.css'
})
export class CardforplacesComponent implements OnInit{
  @Input() data!:string;

  list!:string;

  ngOnInit(): void {
    this.list = this.data;
  }


}
