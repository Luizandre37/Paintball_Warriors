import { Component,OnInit} from '@angular/core';
import { ProductService } from 'src/app/service/productus.service';
import { CartService } from 'src/app/service/cart.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { CardData, Product } from 'src/data-type';
import { Router } from '@angular/router';
import { of } from 'rxjs';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('descendAnimation', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('500ms ease-out', style({ transform: 'translateY(0%)' })),
      ]),
    ]),
  ],
})


export class HomeComponent implements OnInit {



  products: CardData[] = [];
  maxStars = 5;

  constructor(private productService: ProductService , private router: Router, private CartService: CartService) {}

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
  onEnteredEnvelope() {
    // After the animation, navigate to the products page
    setTimeout(() => {
      this.router.navigate(['/products']);
    }, 500);
  }



}
