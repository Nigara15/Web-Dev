import { Component } from '@angular/core';
import {Product} from '../models/product.model'
import { CommonModule } from '@angular/common';
import { ProductItem } from '../product-item/product-item';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.component.html'
})
export class ProductList {
  products:Product[]=[
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful A16 chip and improved camera system.',
      price: 650000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/h2f/iphone15.jpg',
      link: 'https://kaspi.kz/shop/p/iphone-15-128gb-123456/',
      likes:0,
      categoryId:1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24',
      description: 'Flagship Android smartphone with stunning AMOLED display and great performance.',
      price: 580000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/s24.jpg',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-123457/',
      likes:0,
      categoryId:2
    },
    {
      id: 3,
      name: 'MacBook Air M2',
      description: 'Lightweight laptop with Apple M2 chip and long battery life.',
      price: 780000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/macbook.jpg',
      link: 'https://kaspi.kz/shop/p/macbook-air-m2-123458/',
      likes:0,
      categoryId:3
    },
    {
      id: 4,
      name: 'Xiaomi Redmi Note 13',
      description: 'Affordable smartphone with large display and strong battery life.',
      price: 150000,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/redmi13.jpg',
      link: 'https://kaspi.kz/shop/p/redmi-note-13-123459/',
      likes:0,
      categoryId:4
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      description: 'Premium wireless headphones with noise cancellation.',
      price: 210000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/sony.jpg',
      link: 'https://kaspi.kz/shop/p/sony-wh1000xm5-123460/',
      likes:0,
      categoryId:5
    },
    {
      id: 6,
      name: 'Apple Watch Series 9',
      description: 'Smartwatch with health tracking and seamless iPhone integration.',
      price: 240000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/watch9.jpg',
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-123461/',
      likes:0,
      categoryId:6
    },
    {
      id: 7,
      name: 'PlayStation 5',
      description: 'Next-gen gaming console with ultra-fast SSD and stunning graphics.',
      price: 420000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ps5.jpg',
      link: 'https://kaspi.kz/shop/p/playstation-5-123462/',
      likes:0,
      categoryId:7
    },
    {
      id: 8,
      name: 'Dyson V15 Vacuum',
      description: 'Powerful cordless vacuum cleaner with laser dust detection.',
      price: 350000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/dyson.jpg',
      link: 'https://kaspi.kz/shop/p/dyson-v15-123463/',
      likes:0,
      categoryId:8
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'Reliable laptop for work and study with Intel processor.',
      price: 320000,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hp15.jpg',
      link: 'https://kaspi.kz/shop/p/hp-pavilion-15-123464/',
      likes:0,
      categoryId:9
    },
    {
      id: 10,
      name: 'Logitech MX Master 3S',
      description: 'Advanced wireless mouse designed for productivity and comfort.',
      price: 55000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/logitech.jpg',
      link: 'https://kaspi.kz/shop/p/logitech-mx-master-3s-123465/',
      likes:0,
      categoryId:10
    }
  ];
}
