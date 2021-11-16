import {Component, Input} from '@angular/core';
import {BaseBasicComponent} from '../base-basic.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent extends BaseBasicComponent {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: any = null;
  @Input() info: string | undefined;

  constructor() {
    super();
  }
}
