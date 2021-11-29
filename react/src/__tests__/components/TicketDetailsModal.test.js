import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json'
import TicketDetailsModal from '../../components/TicketDetailsModal';
import ticketData from '../../utils/fixtures/ticketData'

Enzyme.configure({
  adapter: new Adapter()
})

test('Should render TicketDetailsModal correctly with props', () => {
  const wrapper = shallow(<TicketDetailsModal selectedTicket={ticketData} />)
  expect(toJSON(wrapper)).toMatchSnapshot()
})
