import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() addToCar = new EventEmitter();

  addToCarHandler() {
    console.log('click form child');
    this.addToCar.emit('hola este es un msg desde el hijo' + this.title);
  }

  imagenUrl = 'https://picsum.photos/640/640?r=' + Math.random();
}
