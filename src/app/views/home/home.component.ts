import { Component,Input,OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/productus.service';
import { CardData } from 'src/data-type';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  products: CardData[] = [];
  maxStars = 5;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getTopProducts().subscribe((data) => {
      this.products = data;
    });
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
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
