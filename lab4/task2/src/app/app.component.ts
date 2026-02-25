import { Component } from '@angular/core';
import { ProductService } from './services/product';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.component.html'
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  selectedProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedProducts =
      this.productService.getProductsByCategory(categoryId);
  }
}
