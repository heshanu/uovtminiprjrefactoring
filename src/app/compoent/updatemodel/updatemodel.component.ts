import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CalenderService } from '../../service/calender.service';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import Swal from 'sweetalert2';
import { CustomerObjectService } from '../../service/customer-object.service';
@Component({
  selector: 'app-updatemodel',
  standalone: false,
  templateUrl: './updatemodel.component.html',
  styleUrl: './updatemodel.component.css'
})
export class UpdatemodelComponent implements OnInit {

  registrationForm!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder, private calenderService: CalenderService,
    public dialogRef: MatDialogRef<UpdatemodelComponent>, // This is CORRECT for dialog components
    @Inject(MAT_DIALOG_DATA) public data: any, private customerDetailsService: CustomerdetailsService,
    private custObj: CustomerObjectService// Optional injected data
  ) { }

  photo: File | null = null;
  photoError: string | null = null;
  days!: any;

  endDates!: any;
  startDates!: any;

  customerDetails!: CustomerdetailsInterface[];

  id!: any;

  getCustomerDetails(): void {
    this.customerDetailsService.getAllCustomers().subscribe((cus) => {
      this.customerDetails = cus
    })
  }

  readonly range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.minLength(3)]],
      age: ['', []],
      address: ['', []],
      accomadation: ['',],
      travelMode: ['',],
      foodList: ['',],
      beverageList: ['',],
      startDate: ['',],
      endDate: ['',],
      phonenum: ['',]

    });

    this.days = this.calenderService.getDayClasses;
    this.getCustomerDetails();

  }


  onSubmit(): void {
    console.log(this.registrationForm.value);

    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      console.log(this.days);

      this.custObj.getCustomerId().subscribe((val) => {
        this.id = val;
      })

      this.customerDetailsService
        .updateCus(this.id, this.registrationForm.value)
        .subscribe({
          next: (cus) => {
            Swal.fire({
              title: 'Action Successfully executed',
              text: 'Customer updated successfully',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            // Add any post-success logic here (e.g., navigation)
          },
          error: (err: any) => {
            console.error('Error:', err);
            Swal.fire({
              title: 'Update Failed',
              text: 'Failed to update customer details',
              icon: 'error',
              confirmButtonText: 'OK'
            });
          }
        });
    } else {
      // Form is invalid - show validation messages
      Swal.fire({
        title: 'Form Invalid',
        text: 'Please fill all required fields correctly',
        icon: 'warning',
        confirmButtonText: 'OK'
      });

      // Mark all fields as touched to show validation errors
      this.registrationForm.markAllAsTouched();
    }
  }


  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
