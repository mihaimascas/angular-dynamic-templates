import {Component, Input} from '@angular/core';
import {BaseContainerComponent} from '../base-container.component';
import {ContainerComponentService} from '../container-component.service';
import {BasicComponentService} from '../../basic/basic-component.service';

@Component({
  selector: '[appCol]',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent extends BaseContainerComponent  {

  @Input()
  set size(s: number | { [x: string]: number; } | undefined) {
    if (!s) {
      this.cssClassName = '';
    }

    if (typeof s === 'number') {
      this.cssClassName = `col-${s}`;
    } else {
      if (s) {
        this.cssClassName = Object.keys(s as Object)
          .map((key) => `col-${key.toLowerCase()}-${s[key] || ''}`)
          .join(' ')
      }
    }
  };

  constructor(
    private containerService: ContainerComponentService,
    private basicService: BasicComponentService
  ) {
    super(containerService, basicService);
  }
}
