import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @Input() envelopeImage: string;
  @Input() figurinhaImage: string;
  @Input() titulo: string;
  @Input() subtitulo!: string;

  constructor() {
    this.envelopeImage = '';
    this.figurinhaImage = '';
    this.titulo = '';
    this.subtitulo = '';
  }

}
