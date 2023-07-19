import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() envelopeImage: string;
  @Input() figurinhaImage: string;
  @Input() figurinhaAlt: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input()envelopeAlt:string;

  constructor(){
    this.envelopeImage = '';
    this.envelopeAlt = '';
    this.figurinhaImage = '';
    this.titulo = '';
    this.subtitulo = '';
    this.figurinhaAlt = '';
  }
}
