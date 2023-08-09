import { Component,Input,EventEmitter, Output } from '@angular/core';
import { CardData } from 'src/data-type';
import { CartService } from 'src/app/service/cart.service';



@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],

})
export class CardProductComponent {
  @Input() product: any;
  showCart: boolean = false;



  @Input() cardImage: string = '';
  @Input() cardAlt: string = '';
  @Input() figurinhaImage: string = '';
  @Input() figurinhaAlt: string = '';
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() preco: string = '';
  @Output() onEnteredEnvelope = new EventEmitter<void>();
  constructor(private cartService: CartService) {}

  addToCart(product:any) {
    this.showCart = !this.showCart;
  }


}
