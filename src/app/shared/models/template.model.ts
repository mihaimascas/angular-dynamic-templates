import {ITemplateComponent} from "./template-component.model";

export interface ITemplate {
  name: string;
  uid?: string;

  components: ITemplateComponent[];
}
