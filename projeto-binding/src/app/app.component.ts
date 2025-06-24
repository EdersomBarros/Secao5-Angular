import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
inputText = "Texto Inicial Alterado";
  inputType = "text"
  isDisabled = false;

  enableInput() {
    this.isDisabled = false;
  }

  disableInput() {
    this.isDisabled = true;
  }

  setPasswordTypeInput() {
    this.inputType = 'password';
  }

  setTextTypeInput() {
    this.inputType = 'text';
  }

  logInputText() {
    console.log(this.inputText);
  }
<<<<<<< HEAD
  handleInputKeyup(event: KeyboardEvent) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log('Key pressed:', currentText);
  }
  handleInputChange(event: Event) {
    const currentText = (event.target as HTMLInputElement).value;
    console.log('Input changed:', currentText);
  }
=======
>>>>>>> 5ae4282 (inserir projeto-binding como pasta comum)
}
