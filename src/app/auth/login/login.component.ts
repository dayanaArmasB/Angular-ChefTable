import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      console.log('Login válido', this.loginForm.value);
      this.router.navigate(['/main']); // 👈 redirigir a tu página principal
    } else {
      console.log('Formulario inválido');
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToRecover() {
    this.router.navigate(['/recover']);
  }


}


