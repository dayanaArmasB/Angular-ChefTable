import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../../core/models/Producto';
import { ProductCardComponent } from '../product-card/product-card.component';



@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() productos!: Producto[];

  @Output() productEventEmitter:EventEmitter<Producto>=new EventEmitter()

  
  AgregarCarrito(producto:Producto){
    this.productEventEmitter.emit(producto)
  }


}
