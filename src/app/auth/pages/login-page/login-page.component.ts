import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login-page',
  standalone: true, 
  imports: [ CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})

export class LoginPageComponent {
  /*constructor(
    private authService: AuthService,
    private router: Router
  )
  {}*/s

  onLogin(): void {

    this.authService.login('fernando@gmail.com','123456')
      .subscribe( user => {

        this.router.navigate(['/']);

      });

  }

}
