import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {BaseBasicComponent} from './base-basic.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    BaseBasicComponent,
    InputComponent
  ],
  imports: [
    SharedModule
  ]
})
export class BasicModule { }
