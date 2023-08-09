import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/service/productus.service';
import { CartService } from 'src/app/service/cart.service';
import { Product } from 'src/data-type';
import { CardData } from 'src/data-type';
import { Category } from 'src/data-type';
import { Features } from 'src/data-type';
import { Brands } from 'src/data-type';



@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.scss']
})
export class HomeProductsComponent implements OnInit {



  isMouseOver: boolean = false;

  @Input() product: any;
  @Output() addToCartClicked = new EventEmitter<any>();


  products: CardData[] = [];
  maxStars = 5;


  categories: Category[] = [
    { name: 'Mobile accessory', checked: false },
    { name: 'Electronics', checked: false },
    { name: 'Smartphones', checked: false },

  ];

  brands: Brands[] = [
    { name: 'metallic', checked: false },
    { name: 'plastic  cover', checked: false },
    { name: '8 GB Ram', checked: false },
    { name: 'Super Power', checked: false },
    { name: 'Large Memory', checked: false },
  ];

  features: Features[] = [

    { name: 'metallic', checked: false },
    { name: 'plastic  cover', checked: false },
    { name: '8 GB Ram', checked: false },
    { name: 'Super Power', checked: false },
    { name: 'Large Memory', checked: false },


  ];

  activeFilter: string = '';
  priceRangeMin: number = 0;
  priceRangeMax: number = 1000;

  selectedCondition: string = '';
  conditions: string[] = ['New', 'Used', 'Refurbished'];

  selectedRating: number = 0;
  ratings: number[] = [1, 2, 3, 4, 5];

  selectedManufacturer: string = '';
  manufacturers: string[] = ['Manufacturer A', 'Manufacturer B', 'Manufacturer C'];


  toggleFilter(filter: string) {
    if (this.activeFilter === filter) {
      this.activeFilter = '';
    } else {
      this.activeFilter = filter;
    }
  }

  constructor(private productService: ProductService, private CartService: CartService) {}
  isAddedToCart = false;
  ngOnInit(): void {
    this.productService.getTopProducts().subscribe((data) => {
      this.products = data;
    });
  }
  increaseRating(product: CardData): void {

    if (product.rating === undefined) {
      product.rating = 0;
    }

    if (product.rating < this.maxStars) {
      product.rating++;
    }
}


}


