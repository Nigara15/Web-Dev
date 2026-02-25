import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() delete=new EventEmitter<number>();
  like(){
    this.product.likes++;
  }
  remove(){
    this.delete.emit(this.product.id);
  }
  share(){
    window.open(
      `https://wa.me/?text=${this.product.name} ${this.product.link}`,
      '_blank'
    );
  }
}
