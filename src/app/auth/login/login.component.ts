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
    const formData = { address: email, password };
    // const formData = this.loginForm.value;
    this.loading = true;
    this.loginService.login(formData).subscribe(
      (resp: any) => {
        console.log(resp);

        this.loginService.setToken(resp.token);
        this.router.navigate(['/catalogo']);
        // this.loginService.setCookie('user_name', resp.usuarioDB.nombre);
        // this.loginService.setCookie('user_profile', resp.usuarioDB.profile);

        this.loading = false;
      },
      (err) => {
        console.error(err);
        // this.alertService.topCenter('Usuario o password incorrectos', 'warning');
        this.loading = false;
      }
    );
    // 👇 Por ahora, simular login con cualquier credencial
    // this.router.navigate(['/catalogo']);
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
