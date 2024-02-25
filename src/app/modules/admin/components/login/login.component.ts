import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signInForm.valid) {
      this.authService.login(this.signInForm.value).subscribe({
        next: (data: any) => {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          this.router.navigate(['/admin/competition']);
        },
        error: (error: HttpErrorResponse) => {
          alert("email or password incorrect")
        }
      });

    }
  }
}
