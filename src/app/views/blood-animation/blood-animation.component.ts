import { Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';



@Component({
  selector: 'app-blood-animation',
  templateUrl: './blood-animation.component.html',
  styleUrls: ['./blood-animation.component.scss']
})
export class BloodAnimationComponent {

  animateBlood(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const bloodAnimation = document.createElement('div');
    bloodAnimation.className = 'blood-animation';

    document.body.appendChild(bloodAnimation);

    anime({
      targets: bloodAnimation,
      duration: 1000,
      opacity: 0,
      translateX: {
        value: anime.random(-100, 100),
        duration: 500
      },
      translateY: {
        value: anime.random(-100, 100),
        duration: 500
      },
      rotate: anime.random(-90, 90),
      easing: 'easeInOutQuad',
      complete: () => {
        document.body.removeChild(bloodAnimation);
      }
    });
  }



}
