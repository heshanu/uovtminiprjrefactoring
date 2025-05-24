import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceCall } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    standalone: false
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  show!: boolean;
  
  errorMessage!: string;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,private router: Router,
    private http: HttpClient,private authService:AuthServiceCall
  ){}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get name():any{
    return this.loginForm.get('username');
  }

  get paswrd():any {
    return this.loginForm.get('password');
  }

  /*
  onSubmit(): void {
    
    console.log('Form Value:', this.loginForm.value);
    console.log('Form Valid:', this.loginForm.valid);
  
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value; // Ensure field name matches your form (e.g., 'name' → 'username')
      const password = this.loginForm.get('password')?.value;
  
      this.authService.login(username, password).subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: (error) => {
          console.error('Login failed:', error);
          // Display a user-friendly error (avoid alert() in production)
          this.errorMessage = 'Invalid username or password';
          // Optionally reset the password field for UX
          this.loginForm.get('password')?.reset();
        }
      });
    } else {
      // Highlight form errors if invalid
      this.loginForm.markAllAsTouched();
    }
  }*/
  
    onSubmit() {
      if (this.loginForm.valid) {
        const { username, password } = this.loginForm.value;

        console.log(username,password);
        
        
        this.authService.login(username, password).subscribe({
          next: (textResponse) => {
            if (textResponse === "Login successful") {
              this.router.navigate(['/home']);
            }
          },
          error: (err) => {
            console.error('Error:', err);
            this.errorMessage = "Login failed";
          }
        });

       
      }
    }
}
