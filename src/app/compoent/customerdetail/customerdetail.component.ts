import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CalenderService } from '../../service/calender.service';
import { CustomerdetailsService } from '../../service/customerdetails.service';
import { CustomerdetailsInterface } from '../../model/customerDetailsInterface';
import { Subject, Subscription, takeUntil } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
    selector: 'app-customerdetail',
    templateUrl: './customerdetail.component.html',
    styleUrl: './customerdetail.component.css',
    standalone: false
})
export class CustomerdetailComponent implements OnInit{

  registrationForm!:FormGroup;

  private destroy$ = new Subject<void>();

  constructor(private fb: FormBuilder,private calenderService:CalenderService,
    private customerDetailsService:CustomerdetailsService,private router:Router
  ) {}

  photo: File | null = null;
  photoError: string | null = null;
  days!:any;

  endDates!:any;
  startDates!:any;

  customerDetails!:CustomerdetailsInterface[]

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      accomadation:['',Validators.required],
      travelMode:['',Validators.required],
      foodList:['',Validators.required],
      foodListOption:[],
      beverageList:['',Validators.required],
      beverageListOption:[],
      startDate:['',Validators.required],
      endDate: ['', Validators.required],
      phonenum:['', Validators.required]

    });

    this.days=this.calenderService.getDayClasses;
    this.getCustomerDetails();

  }

  getCustomerDetails():void{
    this.customerDetailsService.getAllCustomers().subscribe((cus)=>{
        this.customerDetails=cus
    })
  }


  onSubmit(): void {
    console.log(this.registrationForm.value);
    if (this.registrationForm.valid) {
      console.log('Form Submitted:', this.registrationForm.value);
      console.log(this.days);

      this.customerDetailsService.registerCustomer(this.registrationForm.value).subscribe({
  next: (textResponse:any) => {
            if (textResponse === "Customer registered successfully") {

              //this.router.navigate(['/home']);
              console.log("succefully tr");
            }
          },
          error: (err) => {
            console.error('Error:', err);
         //   this.errorMessage = "Login failed";
          }
        });
                      Swal.fire({
  title: 'Action Successfully executed',
  text: 'Customer registered successfully',
  icon: 'success',
  confirmButtonText: 'OK'
});
      } else {
    console.log('Form is invalid');
    // Provide user feedback, e.g., highlight invalid fields
  }

    this.registrationForm.reset();
}

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        this.photo = file;
        this.photoError = null;
      } else {
        this.photo = null;
        this.photoError = 'Please upload a valid image file.';
      }
    }
  }

  readonly range = new FormGroup({
    startDate: new FormControl<Date | null>(null),
    endDate: new FormControl<Date | null>(null),
  });

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }


}
