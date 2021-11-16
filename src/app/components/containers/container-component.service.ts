import {ComponentFactoryResolver, Injectable, ViewContainerRef} from '@angular/core';
import {ITemplateComponent} from '../../shared/models/template-component.model';
import {from, map} from 'rxjs';

const CONTAINER_DEFINITIONS: { [x: string]: any } = {
  row: () =>
    import('./row/row.component').then(m => m.RowComponent),
  col: () =>
    import('./column/column.component').then(m => m.ColumnComponent)
}

@Injectable({
  providedIn: 'root'
})
export class ContainerComponentService {

  constructor(
    private cfr: ComponentFactoryResolver
  ) { }

  loadComponent(vcr: ViewContainerRef, component: ITemplateComponent): any {
    if (!CONTAINER_DEFINITIONS[component.name]) {
      return ;
    }

    vcr.clear();

    return from(CONTAINER_DEFINITIONS[component.name]()).pipe(
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
