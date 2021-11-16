import {ITemplate} from '../shared/models/template.model';

export const templatesData: ITemplate[] = [
  {
    'name': 'Template 1',
    'uid': 't1',
    'components': [
      {
        'name': 'row',
        'children': [
          {
            'name': 'col',
            'inputs': {
              'size': 6,
            },
            'children': [
              {
                'name': 'input',
                inputs: {
                  value: 'mihai@gmail.com',
                  label: 'Email Address:',
                  info: 'Valid Email Address'
                }
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 6,
            },
            'children': [
              {
                'name': 'input',
                inputs: {
                  value: 'mihai.alt@gmail.com',
                  label: 'Alternative Email Address:',
                  info: 'Valid Email Address'
                }
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          }
        ]
      },
      {
        'name': 'row',
        'inputs': {
          noGutters: true
        },
        'children': [
          {
            'name': 'col',
            'inputs': {
              'size': 12,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          },
          {
            'name': 'col',
            'inputs': {
              'size': 4,
            },
            'children': [
              {
                'name': 'text'
              }
            ]
          }
        ]
      }
    ]
  }
]
