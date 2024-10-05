import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cartitem } from '../../models/CartItem';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input() items:Cartitem[] = []

  @Output() abrirEventEmitter = new EventEmitter()

  abrirCerrarCarrito():void{
    this.abrirEventEmitter.emit()
  }
}
