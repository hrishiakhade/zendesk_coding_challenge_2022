import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json'
import TicketList from '../../components/TicketList';
import ticketData from '../../utils/fixtures/ticketData'

Enzyme.configure({
  adapter: new Adapter()
})


test('Should render TicketList title correctly', () => {
  const wrapper = shallow(<TicketList currentPageTickets={[ticketData]}/>)
  expect(toJSON(wrapper)).toMatchSnapshot()
})

