import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {

  /**
   * Cria um EventEmitter para emitir eventos para o componente pai quando o botão for clicado.
   * O evento é do tipo boolean e é emitido com o valor true quando o botão é clicado.
   */
  @Output('buttonClick') buttonClickEmitter = new EventEmitter<boolean>();

  /**
   * Método chamado ao clicar no botão.
   * Emite um evento para o componente pai e exibe um log no console com a mensagem 'Adquirir'.
   */
  onClick() {
    console.log('Adquirir');
    this.buttonClickEmitter.emit(true);
  }
}