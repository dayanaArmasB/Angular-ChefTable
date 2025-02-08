import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatCard, MatCardActions, MatCardContent, MatCardTitle } from '@angular/material/card';
@Component({
  selector: 'app-login-page',
  standalone: true, 
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCard
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  username: string = 'dayana';
  password: string = 'dayana';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    // if (this.authService.login(this.username, this.password)) {
    //   this.router.navigate(['/home']); // Redirigir a la página principal
    // } else {
    //   alert('Usuario o contraseña incorrectos');
    // }

    this.router.navigate(['/home']); // Redirigir a la página principal
  }

}
