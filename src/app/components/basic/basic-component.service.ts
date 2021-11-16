import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {ITemplateComponent} from '../../shared/models/template-component.model';
import {from, map} from 'rxjs';

const BASIC_COMPONENT_DEFINITIONS: { [x: string]: any } = {
  input: () =>
    import('./input/input.component').then(m => m.InputComponent)
}

@Injectable({
  providedIn: 'root'
})
export class BasicComponentService {

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  loadComponent(vcr: ViewContainerRef, component: ITemplateComponent): any {
    if (!BASIC_COMPONENT_DEFINITIONS[component.name]) {
      return ;
    }

    vcr.clear();

    return from(BASIC_COMPONENT_DEFINITIONS[component.name]()).pipe(
      map((component: any) => this.cfr.resolveComponentFactory(component)),
      map(componentFactory => {
        const compRef = vcr.createComponent(componentFactory);
        const compInstance = compRef.instance;

        if (compInstance) {
          // @ts-ignore
          compInstance.templateComponent = component
          // Set inputs
          if (component.inputs) {
            Object.keys(component.inputs).forEach((key: string) => {
              // @ts-ignore
              compInstance[key] = component.inputs[key];
            })
          }
        }
      })
    );
  }
}
