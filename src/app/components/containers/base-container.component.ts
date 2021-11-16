import {AfterViewInit, Component, HostBinding, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ContainerComponentService} from './container-component.service';
import {BehaviorSubject, filter, map, Subject, takeUntil} from 'rxjs';
import {ITemplateComponent} from '../../shared/models/template-component.model';
import {HostDirective} from '../../shared/utils/host.directive';
import {BasicComponentService} from '../basic/basic-component.service';

@Component({
  selector: 'app-base-container',
  template: ''
})
export class BaseContainerComponent implements OnInit, OnDestroy, AfterViewInit {

  @HostBinding('class') cssClassName = '';

  templateComponent$: BehaviorSubject<ITemplateComponent | null>
    = new BehaviorSubject<ITemplateComponent | null>(null);

  @Input()
  set templateComponent(t: ITemplateComponent | null) {
    this.templateComponent$.next(t);
  }
  get templateComponent(): ITemplateComponent | null {
    return this.templateComponent$.value;
  }

  private unSub$: Subject<void> = new Subject<void>();

  @ViewChild(HostDirective, { static: true }) protected hostElem: HostDirective | undefined;

  constructor(
    private containerComponentService: ContainerComponentService,
    private basicComponentService: BasicComponentService
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.templateComponent$
      .pipe(
        takeUntil(this.unSub$),
        filter((tc) => !!(tc && tc.children && tc.children.length > 0)),
        map((tc): ITemplateComponent[] => tc?.children || [])
      )
      .subscribe((components) => this.generateChildComponents(components))
  }

  ngOnDestroy() {
    this.unSub$.next();
    this.unSub$.complete();
  }

  generateChildComponents(components: ITemplateComponent[]) {
    console.log(this.hostElem);
    if (components && components.length && this.hostElem) {
      const viewContainerRef = this.hostElem.viewContainerRef;

      components.forEach(c => {
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
