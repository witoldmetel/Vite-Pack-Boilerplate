import * as React from 'react';
import { shallow } from 'enzyme';

import { Aboat } from './Aboat';

describe('<Aboat>', () => {
  it('renders without crashing', () => {
    shallow(<Aboat />);
  });

  it('tt renders correctly', () => {
    const wrapper = shallow(<Aboat />);

    expect(wrapper).toMatchSnapshot();
  });
});
