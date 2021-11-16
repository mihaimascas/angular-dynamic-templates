import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BasicModule} from "./basic/basic.module";
import {ContainersModule} from "./containers/containers.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasicModule,
    ContainersModule
  ],
  exports: [
    BasicModule,
    ContainersModule
  ]
})
export class ComponentsModule { }
