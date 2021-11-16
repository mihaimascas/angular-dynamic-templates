import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TemplateService} from './template.service';
import {Subject, takeUntil} from 'rxjs';
import {ContainerComponentService} from './components/containers/container-component.service';
import {ITemplate} from './shared/models/template.model';
import {HostDirective} from './shared/utils/host.directive';
import {BasicComponentService} from './components/basic/basic-component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild(HostDirective, { static: true }) hostElem: HostDirective | undefined;

  title = 'angular-dynamic-templates';


  template: ITemplate | undefined;

  unSub$: Subject<void> = new Subject<void>();

  constructor(
    private templateService: TemplateService,
    private containerComponentService: ContainerComponentService,
    private basicComponentService: BasicComponentService
  ) {
  }

  ngOnInit() {
    this.templateService.getTemplate('t1')
      .pipe(takeUntil(this.unSub$))
      .subscribe((t) => {
        if (!t) {
          return
        }
        this.template = t;
        this.processTemplate(t);
      })
  }

  ngOnDestroy() {
    this.unSub$.next();
    this.unSub$.complete();
  }

  private processTemplate(tmp: ITemplate) {
    if (tmp.components && tmp.components.length && this.hostElem) {
      const viewContainerRef = this.hostElem.viewContainerRef;

      tmp.components.forEach(c => {
        if (c.children) { // Container component
          this.containerComponentService
            .loadComponent(viewContainerRef, c)
            .subscribe();
        } else { // Basic component
          this.basicComponentService
            .loadComponent(viewContainerRef, c)
            .subscribe();
        }
      })
    }
  }
}
