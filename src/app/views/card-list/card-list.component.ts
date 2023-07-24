import { Component, Input } from '@angular/core';
import { CardData } from 'src/data-type';



@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {

  @Input() cards: CardData[] = [];

}
