import { Component,Input,OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Router } from '@angular/router';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('descendAnimation', [
      state('notClicked', style({ transform: 'translateY(0)', opacity: 1 })),
      state('clicked', style({ transform: 'translateY(100px)', opacity: 0 })),
      transition('notClicked => clicked', animate('500ms ease-out')),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() envelopeImage: string;
  @Input() figurinhaImage: string;
  @Input() figurinhaAlt: string;
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input()envelopeAlt:string;
  figurinhaState: 'notClicked' | 'clicked' = 'notClicked';

  constructor(private router: Router){
    this.envelopeImage = '';
    this.envelopeAlt = '';
    this.figurinhaImage = '';
    this.titulo = '';
    this.subtitulo = '';
    this.figurinhaAlt = '';
  }
  ngOnInit(): void {

  }
  onFigurinhaClicked() {
    this.figurinhaState = this.figurinhaState === 'notClicked' ? 'clicked' : 'notClicked';


    setTimeout(() => {

      this.figurinhaState = 'notClicked';

      this.router.navigate(['/products']);
    }, 500); 
  }
}
