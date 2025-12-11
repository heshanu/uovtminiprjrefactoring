import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tripplan',
  standalone: false,
  templateUrl: './tripplan.component.html',
  styleUrl: './tripplan.component.css'
})
export class TripplanComponent implements OnInit {

  travelForm!: FormGroup;
    btnCaption = "Back";
  btnColor = "red";

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.travelForm = this.fb.group({
      location: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      travelers: [1, [Validators.required, Validators.min(1)]]
    });
  }

  submit() {
    if (this.travelForm.valid) {
      console.log('Travel Data:', this.travelForm.value);
    } else {
      this.travelForm.markAllAsTouched();
    }
  }
}
