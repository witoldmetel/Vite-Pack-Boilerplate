import React from 'react';
import { shallow } from 'enzyme';

import { Aboat } from './Aboat';

describe('Hello, Enzyme!', () => {
  it('It renders correctly', () => {
    const wrapper = shallow(<Aboat />);

    expect(wrapper).toMatchSnapshot();
  });
});
