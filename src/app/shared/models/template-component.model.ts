export interface ITemplateComponent {
  name: string;
  inputs?: { [x: string]: any };
  data?: any;
  children?: ITemplateComponent[];
}
