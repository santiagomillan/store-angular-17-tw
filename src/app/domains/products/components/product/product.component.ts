import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input() price: number = 0;
  @Input() title: string = '';

  imagenUrl = 'https://picsum.photos/640/640?r=' + Math.random();
}
