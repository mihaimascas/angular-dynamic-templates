import { NgModule } from '@angular/core';
import { RowComponent } from './row/row.component';
import { BaseContainerComponent } from './base-container.component';
import { ColumnComponent } from './column/column.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    BaseContainerComponent,
    RowComponent,
    ColumnComponent
  ],
  exports: [
    RowComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ContainersModule { }
