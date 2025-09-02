import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private readonly router: Router) { }

  goToRegister() {
      this.router.navigate(['/register']);
  }

  onLogin() {
    // 👇 Aquí no validamos nada todavía
    console.log('Intentando login con', this.email, this.password);
    this.router.navigate(['/main']);
  }

    goToRecover() {
    this.router.navigate(['/recover']);
  }


}


