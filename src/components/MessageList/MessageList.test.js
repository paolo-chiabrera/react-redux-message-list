import React from 'react';
import renderer from 'react-test-renderer';

import MessageList from './MessageList.jsx';

test('Should render the MessageList component', () => {
    const component = renderer.create(<MessageList />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});