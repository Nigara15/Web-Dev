import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Apple smartphone with A16 chip',
      price: 520000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h52/8633737034558.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113371037/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Samsung flagship smartphone',
      price: 480000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1e/h1b/69699748634654.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-chernyi-108625745/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 13',
      description: 'Powerful Xiaomi smartphone',
      price: 350000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h68/h66/69699748634655.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/xiaomi-13-256gb-chernyi-108950998/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Huawei P60 Pro',
      description: 'Huawei premium smartphone',
      price: 420000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h89/h32/69699748634656.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/huawei-p60-pro-256gb-chernyi-109050998/',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'Realme GT 3',
      description: 'Fast charging smartphone',
      price: 300000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h32/69699748634657.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/realme-gt-3-256gb-chernyi-109450998/',
      likes: 0,
      categoryId: 1
    },

    // ================= LAPTOPS =================
    {
      id: 6,
      name: 'MacBook Air M2',
      description: 'Apple laptop with M2 chip',
      price: 650000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h89/69699748634658.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2-13-256gb-107333970/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'Lenovo IdeaPad 3',
      description: 'Affordable everyday laptop',
      price: 280000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h12/h89/69699748634659.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3-15itl6-82h800bark-106151054/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'ASUS TUF Gaming',
      description: 'Gaming laptop',
      price: 550000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h89/69699748634660.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0gw1-m00230-107880507/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'HP modern laptop',
      price: 320000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h89/69699748634661.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-eg2022ci-6f8m2ea-107622333/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'Acer Aspire 5',
      description: 'Reliable daily laptop',
      price: 300000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h89/69699748634662.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/acer-aspire-5-a515-57-57av-nx-k9xer-001-107790245/',
      likes: 0,
      categoryId: 2
    },
    {
      id: 11,
      name: 'AirPods Pro 2',
      description: 'Apple wireless earbuds',
      price: 150000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/h89/69699748634663.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-107000123/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5',
      description: 'Noise cancelling headphones',
      price: 200000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/h89/69699748634664.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-107500321/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'JBL Tune 760NC',
      description: 'JBL wireless headphones',
      price: 70000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h18/h89/69699748634665.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/jbl-tune-760nc-106345999/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Marshall Major IV',
      description: 'Stylish headphones',
      price: 95000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h19/h89/69699748634666.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/marshall-major-iv-106400888/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'Xiaomi Buds 4',
      description: 'Affordable earbuds',
      price: 40000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/h89/69699748634667.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/xiaomi-buds-4-107990321/',
      likes: 0,
      categoryId: 3
    },
    {
      id: 16,
      name: 'iPad 10th Gen',
      description: 'Apple tablet',
      price: 300000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h21/h89/69699748634668.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-ipad-10-9-2022-64gb-107222444/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9',
      description: 'Samsung tablet',
      price: 350000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h89/69699748634669.jpg',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-107333555/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6',
      description: 'Xiaomi tablet',
      price: 200000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h89/69699748634670.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-107777222/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Huawei MatePad 11',
      description: 'Huawei tablet',
      price: 230000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h89/69699748634671.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-107888222/',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description: 'Lenovo Android tablet',
      price: 180000,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h25/h89/69699748634672.jpg',
      rating: 4,
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p11-107444333/',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
