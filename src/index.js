import React from 'react';

import AppComponent from 'flow-app-component';

class FormComponent extends AppComponent {
  static properties = {
    iconUrl: '/assets/images/form-component.png',
    name: 'Form',
    type: 'ui-component',
    componentType: 'form',
    category: 'Inputs',
    parent: null,
    showOnComponentsPanel: true,
    isValuable: true,
    allowsChildren: true
  };

  constructor() {
    super();
    const newState = {
      properties: [
        {
          categoryName: 'General',
          categoryDescription: 'Basic settings for the form',
          properties: [],
        },
        {
          categoryName: 'Events',
          categoryDescription: 'Events for the form',
          properties: [
            {
              id: 'event',
              name: 'Events',
              type: 'graph',
              options: {},
              data: null,
            },
          ],
        },
      ],

      ...FormComponent.properties
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    return null;
  }
}

export default FormComponent;
