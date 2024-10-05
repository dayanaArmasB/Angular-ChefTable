import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { Producto } from '../../models/Producto';
import { ProductService } from '../../services/product.service';
import { Cartitem } from '../../models/CartItem';
import { CartComponent } from '../cart/cart.component';
import { NavbarComponent } from '../navbar/navbar.component';
import {FooterComponent} from '../footer/footer.component'
import {CarouselComponent} from '../carousel/carousel.component'
import {AboutUsComponent} from '../about-us/about-us.component'
import {VisitUsComponent} from '../visit-us/visit-us.component'
@Component({
  selector: 'app-product-app',
  standalone: true,
  imports: [ProductListComponent, CartComponent,NavbarComponent,FooterComponent,CarouselComponent,AboutUsComponent,VisitUsComponent],
  templateUrl: './product-app.component.html',
  styleUrl: './product-app.component.css'
})
export class ProductAppComponent implements OnInit {
  productos: Producto[] = [];
  items: Cartitem[] = [];
  total: number = 0;
  dineroGastado: number = 0;
  mostrarCarrito: boolean = false;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductos().subscribe(res => {
      this.productos = res;
    });
    this.items = this.items.map(item => {
      if (item.cantidad != 0) {
        this.ActualizarCantidad(item.producto, -item.cantidad);
        this.dineroGastado += item.cantidad * item.producto.precio;
        return item;
      }
      return item;
    });
    this.calcularTotal();
  }

  AgregarCarrito(producto: Producto) {
    if (producto.cantidad > 0) {
      const existeItem = this.items.find(item => item.producto.id === producto.id);
      if (!existeItem) {
        this.ActualizarCantidad(producto, -1);
        this.dineroGastado += producto.precio;
        this.items = [...this.items, { producto: { ...producto }, cantidad: 1, precioTotal: parseFloat((producto.precio).toFixed(2)) }];
      } else {
        this.items = this.items.map(item => {
          if (item.producto.id === producto.id) {
            this.dineroGastado += producto.precio;
            this.ActualizarCantidad(producto, -1);
            return { ...item, cantidad: item.cantidad + 1, precioTotal: parseFloat(((item.cantidad + 1) * item.producto.precio).toFixed(2)) };
          }
          return item;
        });
      }
      this.calcularTotal();
      this.guardarSession();
    }
  }

  AgregarCarrito1(producto: Producto) {
    if (producto.cantidad > 0) {
      const existeItem = this.items.find(item => item.producto.id === producto.id);
      if (existeItem) {
        this.items = this.items.map(item => {
          if (item.producto.id === producto.id && item.cantidad < item.producto.cantidad) {
            this.dineroGastado += producto.precio;
            this.ActualizarCantidad(producto, -1);
            return { ...item, cantidad: item.cantidad + 1, precioTotal: parseFloat(((item.cantidad + 1) * item.producto.precio).toFixed(2)) };
          }
          return item;
        });
        this.calcularTotal();
        this.guardarSession();
      }
    }
  }

  DisminuirCarrito1(producto: Producto) {
    const existeItem = this.items.find(item => item.producto.id === producto.id);
    if (existeItem) {
      this.items = this.items.map(item => {
        if (item.producto.id === producto.id && item.cantidad > 1) {
          this.dineroGastado -= producto.precio;
          this.ActualizarCantidad(producto, +1);
          return { ...item, cantidad: item.cantidad - 1, precioTotal: parseFloat(((item.cantidad - 1) * item.producto.precio).toFixed(2)) };
        }
        return item;
      });
      this.calcularTotal();
      this.guardarSession();
    }
  }

  ActualizarCantidad(producto: Producto, numero: number) {
    this.productos = this.productos.map(item => {
      if (item.id === producto.id) {
        return { ...item, cantidad: item.cantidad + numero };
      }
      return item;
    });
  }

  onDeleteCarrito(id: number) {
    this.items = this.items.map(item => {
      if (item.producto.id === id) {
        this.dineroGastado -= item.producto.precio * item.cantidad;
        this.ActualizarCantidad(item.producto, item.cantidad);
        return item;
      }
      return item;
    });
    this.items = this.items.filter(item => item.producto.id !== id);
    this.calcularTotal();
    this.guardarSession();
  }

  calcularTotal() {
    this.total = this.items.reduce((acumulador, item) => acumulador + (item.cantidad * item.producto.precio), 0);
    this.total = parseFloat(this.total.toFixed(2));
    this.dineroGastado = parseFloat(this.dineroGastado.toFixed(2));
  }

  guardarSession() {
    sessionStorage.setItem('cart', JSON.stringify(this.items));
  }

  abrirCerrarCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }
}
