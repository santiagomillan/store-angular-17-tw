import { Component, inject, signal } from '@angular/core';
import { ProductComponent } from './../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { CartService } from '../../../shared/services/cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { error } from 'console';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  imagenUrl = 'https://picsum.photos/640/640?r=' + Math.random();

  products = signal<Product[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
