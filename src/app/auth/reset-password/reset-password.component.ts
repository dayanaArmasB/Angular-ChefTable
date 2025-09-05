import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormUtils } from '../../shared/utils/form-utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reset-password',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent implements OnInit {
  fb = inject(FormBuilder);
  router = inject(Router);
  route = inject(ActivatedRoute);

  formUtils = FormUtils;

  token: string | null = null;

  resetForm = this.fb.group(
    {
      password: ['', [Validators.required, Validators.
      pattern(FormUtils.strongPasswordPattern)]],
      password2: ['', Validators.required],
    },
    {
      validators: [FormUtils.isFieldOneEqualFieldTwo('password', 'password2')],
    }
  );

  ngOnInit() {
    // Obtenemos el token de la URL
    this.token = this.route.snapshot.queryParamMap.get('token');
    console.log('Token recibido:', this.token);
  }

  onReset() {
    if (this.resetForm.invalid) {
      this.resetForm.markAllAsTouched();
      return;
    }

    console.log('Nueva contraseña:', this.resetForm.value.password, 'con token:', this.token);

    // Simulación: redirigimos al login
    this.router.navigate(['/login'], {
      queryParams: { resetSuccess: true },
    });
  }
}
