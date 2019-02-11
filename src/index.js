import React from 'react';
import AppComponent from 'flow-app-component';

import './css/theme/default.css';

class FormComponent extends AppComponent {
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
      iconUrl: '/assets/images/form-component.png',
      name: 'Form',
      type: 'ui-component',
      componentType: 'form',
      category: 'Inputs',
      parent: null,
      showOnComponentsPanel: true,
      isValuable: true,
      allowsChildren: true,
      allowedChildTypes: ['checkbox', 'container', 'link', 'input', 'search', 'text', 'loader', 'radio', 'map', 'dropdown'],
    };

    this.state = Object.assign(this.state, newState); // merge two states together, and dont lose any parent state properties.
  }

  renderContent() {
    let customStyles = {};
    if (!this.props.hasChildren) {
      customStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70px',
      };
    }
    return (
      <div className="form-container" style={customStyles}>
        {!this.props.hasChildren && <span>Drag fields in here</span>}
        {this.renderChildren()}
      </div>
    );
  }
}

export default FormComponent;
