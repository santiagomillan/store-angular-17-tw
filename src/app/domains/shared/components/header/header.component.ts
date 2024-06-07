import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  headerSideMenu = signal(true);
  @Input({ required: true }) cart: Product[] = [];

  toogleSideMenu() {
    this.headerSideMenu.update((prevState) => !prevState);
  }
}
