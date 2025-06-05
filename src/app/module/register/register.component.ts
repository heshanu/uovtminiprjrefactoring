import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceCall } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    standalone: false
})
export class RegisterComponent implements OnInit{

    registerForm!: FormGroup;
    show!: boolean;

    errorMessage!: string;

    constructor(private fb: FormBuilder,
      private route: ActivatedRoute,private router: Router,
      private http: HttpClient,private authService:AuthServiceCall
    ){}

    ngOnInit(): void {
      this.registerForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(3)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(3)]]
      });
    }

      onSubmit() {
        if (this.registerForm.valid) {
        const { username, password} = this.registerForm.value;

          console.log(username, password);
                                Swal.fire({
            title: 'Action Successfully executed',
            text: 'Customer registered successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });

          this.authService.register(username,password).subscribe({
            next: (textResponse) => {
              if (textResponse == "User registered successfully") {
                this.router.navigate(['/home']);
              }
            },
            error: (err) => {
                                    Swal.fire({
                title: 'Action Successfully executed',
                text: 'Unable to registered successfully',
                icon: 'error',
                confirmButtonText: 'OK'
              });
              console.error('Error:', err);
              this.errorMessage = "Register failed";
            }
          });


        }
      }

}
