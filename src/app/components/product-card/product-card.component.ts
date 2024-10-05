import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() producto!:Producto 
  @Output() productEventEmitter:EventEmitter<Producto>=new EventEmitter();
  
  AgregarCarrito(producto:Producto){
    this.productEventEmitter.emit(producto)
  }
}
