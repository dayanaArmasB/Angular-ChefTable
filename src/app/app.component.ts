import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAppComponent } from './components/product-app/product-app.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'API-app';
}
