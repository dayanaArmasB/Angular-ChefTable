import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Cartitem } from '../../../core/models/CartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  router = inject(Router);
  @Input() items:Cartitem[] = []

  @Output() abrirEventEmitter = new EventEmitter()

  abrirCerrarCarrito():void{
    this.abrirEventEmitter.emit()
  }


  logout() {
    // Aquí podrías limpiar el localStorage/sessionStorage si guardas tokens
    // localStorage.removeItem('token');

    // Redirigir al login
    this.router.navigate(['/login']);
  }
}
