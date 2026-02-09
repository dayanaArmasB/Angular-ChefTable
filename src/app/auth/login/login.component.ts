import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from '../../shared/utils/form-utils';
import { AuthService } from '../../core/services/auth.service';
import { AlertService } from '../../shared/services/alert.service';
import { LoginResponse } from '../dto/LoginResponse';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);
  loginService = inject(AuthService);
  formUtils = FormUtils;
  showPassword: boolean = false;
  loading: boolean = false;
  alertService = inject(AlertService);

  loginForm = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.pattern(FormUtils.emailPattern)],
    ],
    password: [],
  });

  // //   [
  // //   Validators.required,
  // //   Validators.pattern(FormUtils.strongPasswordPattern),
  // // ],

  ngOnInit() {
    const success = this.route.snapshot.queryParamMap.get('resetSuccess');
    if (success) {
      alert(
        'Tu contraseña ha sido restablecida con éxito. ¡Ahora inicia sesión!'
      );
    }
  }

onLogin() {
  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;
  const formData = { address: email ?? '', password: password ?? '' };

  this.loading = true;

  this.loginService.login(formData).subscribe(
    (resp: LoginResponse) => {
      if (resp.success) {
        // ✅ Guardar token solo si el login fue exitoso
        this.loginService.setToken(resp.token);

        this.alertService.success('Inicio de sesión exitoso');
        this.router.navigate(['/catalogo']);
      } else {
        this.alertService.error(
          resp.message || 'Usuario o contraseña incorrectos',
        );
      }
      this.loading = false;
    },
    () => {
      this.alertService.error('Error de conexión con el servidor');
      this.loading = false;
    }
  );
}



  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToRecover() {
    this.router.navigate(['/recover']);
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
