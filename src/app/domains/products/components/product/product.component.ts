import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../shared/models/product.model';
import { CommonModule } from '@angular/common';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addToCar = new EventEmitter();

  addToCarHandler() {
    console.log('click form child');
    this.addToCar.emit(this.product);
  }

  imagenUrl = 'https://picsum.photos/640/640?r=' + Math.random();
}
