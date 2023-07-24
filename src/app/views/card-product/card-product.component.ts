import { Component,Input } from '@angular/core';
import { CardData } from 'src/data-type';


@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() cardImage: string = '';
  @Input() cardAlt: string = '';
  @Input() figurinhaImage: string = '';
  @Input() figurinhaAlt: string = '';
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() preco: string = ''
}
