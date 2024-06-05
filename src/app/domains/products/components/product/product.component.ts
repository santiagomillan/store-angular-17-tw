import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler() {
    console.log('click form child');
    this.addToCar.emit(
      'hola este es un msg desde el hijo' + this.product.title
    );
  }

  imagenUrl = 'https://picsum.photos/640/640?r=' + Math.random();
}
