import React from 'react';
import renderer from 'react-test-renderer';
import HeadingsView from './headings-view';

describe('HeadingsView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<HeadingsView>Title</HeadingsView>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
