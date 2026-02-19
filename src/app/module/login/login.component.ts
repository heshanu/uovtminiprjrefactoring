import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceCall } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../service/language.service';

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
  currentLang = '';

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,private router: Router,
    private http: HttpClient,private authService:AuthServiceCall,
    private translate: TranslateService,
    private languageService: LanguageService
  ){
   this.languageService.currentLanguage$
      .subscribe(lang => {
        this.currentLang = lang;
        console.log('Language changed:', lang);
      });
  }

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

  changeLang(lang: string) {
    this.translate.use(lang);
    this.languageService.setLanguage(lang);
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
                                    Swal.fire({
                title: 'Action Successfully executed',
                text: 'Customer registered successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              });
              this.router.navigate(['/home']);
            }
          },
          error: (err) => {
                                  Swal.fire({
              title: 'Action Successfully executed',
              text: 'Customer registered not successful',
              icon: 'error',
              confirmButtonText: 'OK'
            });
            console.error('Error:', err);
            this.errorMessage = "Login failed";
          }
        });


      }
    }
}
