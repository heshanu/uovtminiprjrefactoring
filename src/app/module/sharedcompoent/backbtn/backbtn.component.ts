import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-backbtn',
  standalone: false,
  templateUrl: './backbtn.component.html',
  styleUrl: './backbtn.component.css'
})
export class BackbtnComponent implements OnInit {
  constructor(private location: Location) {}
  
  @Input() textCaption!: string;
  btnCaption!: string;

  @Input() btnColor!: string;
  btnBgColor!: string;

  ngOnInit(): void {
    this.btnCaption = this.textCaption;
    this.btnBgColor = this.btnColor;
  }

  execute() { 
    this.location.back();
  }
}

