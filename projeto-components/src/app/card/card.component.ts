import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() planType: string = '';
  @Input({required: true, alias: 'planPrice'}) planPrice: number = 0;

  // Método chamado quando o botão do componente filho é clicado.
  // Recebe o evento emitido pelo EventEmitter do componente filho.
  buttonClicked(event: boolean) {
    console.log('buttonClicked', event);
  }
}
