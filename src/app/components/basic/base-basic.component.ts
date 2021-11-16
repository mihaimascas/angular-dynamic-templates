import {Component, HostBinding, Input, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {ITemplateComponent} from '../../shared/models/template-component.model';

@Component({
  selector: 'app-base-container',
  template: ''
})
export class BaseBasicComponent implements OnInit, OnDestroy {

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

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.unSub$.next();
    this.unSub$.complete();
  }
}
