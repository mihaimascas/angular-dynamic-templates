import { Injectable } from '@angular/core';
import {ITemplate} from './shared/models/template.model';
import {Observable, of} from 'rxjs';
import {templatesData} from './data/templates';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  templates: ITemplate[] = templatesData;

  constructor() {}

  getTemplate(uid: string): Observable<ITemplate | undefined> {
    return of(this.templates.find(t => t.uid === uid));
  }
}
