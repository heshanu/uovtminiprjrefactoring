import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: false,
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent implements OnInit{

  @Input() cleanResponse!: string;
  @Input() seeAll!: boolean;

  recivedcleanResponse!: string;
  recivedseeAll!: boolean;

  ngOnInit(): void {
    this.recivedcleanResponse = this.cleanResponse;
    this.recivedseeAll = this.seeAll;
  }
  
}
