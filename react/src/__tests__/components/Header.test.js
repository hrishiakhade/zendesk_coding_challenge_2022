import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Header from '../../components/Header';

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render Header correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper).toMatchSnapshot()
})

test('Should render Header title correctly', () => {
  const wrapper = shallow(<Header />)
  expect(wrapper.find('h3').length).toBe(1)
})

