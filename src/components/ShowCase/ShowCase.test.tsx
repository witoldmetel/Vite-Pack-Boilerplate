import * as React from 'react';
import { shallow } from 'enzyme';

import { ShowCase } from './ShowCase';

describe('<ShowCase>', () => {
  it('renders without crashing', () => {
    shallow(<ShowCase />);
  });

  it('renders correctly', () => {
    const wrapper = shallow(<ShowCase />);

    expect(wrapper).toMatchSnapshot();
  });
});
