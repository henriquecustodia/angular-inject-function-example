import { Component } from '@angular/core';
import { classManager } from './functions/class-manager';
import { getHost } from './functions/get-host';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  host = getHost<HTMLElement>();

  classManagerInstance = classManager(getHost(), 'red-color');

  setFontColorAsRed() {
    this.classManagerInstance.add();
  }

  removeFontColor() {
    this.classManagerInstance.remove();
  }

}
