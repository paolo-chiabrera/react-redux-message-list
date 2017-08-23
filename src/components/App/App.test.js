import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

import MessageList from '../MessageList'; 

describe('Given an App component', () => {
  let component;

  describe('When it is rendered', () => {
    beforeEach(() => {
      component = shallow(<App />, { lifecycleExperimental: true });
    });

    it('Should contain the app-wrapper div', () => {
      expect(component.find('div.app-wrapper').length).toBe(1);
    });

    it('Should contain the messages title', () => {
      expect(component.contains(<h1>Messages</h1>)).toBe(true);
    });

    it('Should contain the MessageList component', () => {
      expect(component.contains(<MessageList />)).toBe(true);
    });
  });
});
