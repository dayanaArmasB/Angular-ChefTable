import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormUtils } from '../../shared/utils/form-utils';
import { AlertService } from '../../shared/services/alert.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  fb = inject(FormBuilder);
  router = inject(Router);
  alertService = inject(AlertService);
  formUtils = FormUtils;
  showPassword = false;
  registerService = inject(AuthService);

  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)]],
      password: ['', [Validators.required, Validators.pattern(FormUtils.strongPasswordPattern)]],
      confirmPassword: ['', Validators.required],
    },
    { validators: [FormUtils.isFieldOneEqualFieldTwo('password', 'confirmPassword')] }
  );

  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    const { email, password } = this.registerForm.value;
    const formData = { address: email, password };
    this.registerService.registerUser(formData).subscribe(
      (resp: any) => { 
        this.alertService.success('Registro exitoso. Ahora puedes iniciar sesión.');
        this.router.navigate(['/login']);
    },
      (err) => {
        this.alertService.error('Usuario o password incorrectos');

      }
    );
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}

