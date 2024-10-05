import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cartitem } from '../../models/CartItem';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() items:Cartitem[]=[]
  @Input() total=0
  @Input() totalPrecio=0
  @Output() idProductoEventEmitter:EventEmitter<number>=new EventEmitter();
  onDeleteCarrito(id:number){
      this.idProductoEventEmitter.emit(id)
  }
  @Output() AgregarEventEmitter:EventEmitter<Producto>=new EventEmitter();
  onAgregar(producto:Producto){
    this.AgregarEventEmitter.emit(producto)
  }
  @Output() DisminuirEventEmitter:EventEmitter<Producto>=new EventEmitter();
  onDisminuir(producto:Producto){
    this.DisminuirEventEmitter.emit(producto)
  }
}
