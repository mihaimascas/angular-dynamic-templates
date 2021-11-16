import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HostDirective} from "./utils/host.directive";

@NgModule({
  declarations: [
    HostDirective,
  ],
  exports: [
    HostDirective,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
