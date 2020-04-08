import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SearchView from './search-view';
import { Input } from './search-styles';

const mockDoSearch = jest.fn();

describe('SearchView', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(
        <SearchView
          searchText="Eminem"
          doSearch={mockDoSearch}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should call search function', () => {
    const wrapper = shallow(
      <SearchView
        searchText="Eminem"
        doSearch={mockDoSearch}
      />,
    );

    wrapper
      .find(Input)
      .first()
      .simulate('change', {
        target: {
          value: 'Eminem',
        },
      });

    expect(mockDoSearch).toBeCalledTimes(1);
  });
});
