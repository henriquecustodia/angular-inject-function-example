import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { createClassManager } from './functions/class-manager';
import { getHost } from './functions/get-host';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  changeDetectorRef = inject(ChangeDetectorRef);

  host = getHost<HTMLElement>();

  classManager = createClassManager(getHost(), 'red-color');

  setFontColorAsRed() {
    this.classManager.add();
  }

  removeFontColor() {
    this.classManager.remove();
  }

}
