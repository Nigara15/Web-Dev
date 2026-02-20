import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <section (mouseover)="showSecretMessage()"></section>`,
})
export class App {
  message = '';

  showSecretMessage() {
    this.message='Way to go'
  }
}
