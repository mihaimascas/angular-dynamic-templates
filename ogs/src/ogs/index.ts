import {apply, mergeWith, Rule, SchematicContext, template, Tree, url} from '@angular-devkit/schematics';
import {Schema} from './schema';
import {strings} from '@angular-devkit/core';

export function ogs(_options: Schema): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const sourceTemplate = url('./files');
    const sourceParamTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings
      })
    ]);


    // return mergeWith(sourceParamTemplate);

    return mergeWith(sourceParamTemplate)(tree, _context);
  };
}
