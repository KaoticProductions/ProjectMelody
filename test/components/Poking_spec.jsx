import React from 'react';
import ReactDOM from 'react-dom';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  Simulate
} from 'react-addons-test-utils';
import Poking from '../../src/components/Poking';
import {expect} from 'chai';

describe('Poking', () => {
  it('renders a button', () => {
    const component = renderIntoDocument( <Poking /> );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('Poke');
  });

  it('invokes callback when a button is clicked', () => {
    const component = renderIntoDocument( <Poking /> );
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    Simulate.click(buttons[0]);
    expect(buttons.length).to.equal(1);
    expect(buttons[0].textContent).to.equal('Poke');
  });
});
