import {Component, HostBinding, Input} from '@angular/core';
import {BaseContainerComponent} from '../base-container.component';
import {ContainerComponentService} from '../container-component.service';
import {BasicComponentService} from '../../basic/basic-component.service';

@Component({
  selector: '[appRow]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent extends BaseContainerComponent {

  override cssClassName = 'row';

  @HostBinding('class.g-0')
  @Input() noGutters: boolean | undefined;

  constructor(
    private containerService: ContainerComponentService,
    private basicService: BasicComponentService
  ) {
    super(containerService, basicService);
  }
}
