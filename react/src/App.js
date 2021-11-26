import React, { Component } from 'react';
import { getTickets } from './utils/api-helpers';
import './App.css';
import Header from './components/Header'
import strings from './utils/constants/strings.js'


export default class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 25,
    selectedTicket: undefined

  }

  onPageChange = (number) => {
    this.setState({ currentPage: number })
  }

  onSelectTicket = (id) => {
    const selectedTicket = this.state.tickets.filter(ticket => ticket.id === id)
    this.setState({ selectedTicket: selectedTicket })
  }

  onClearSelectedTicket = () => {
    this.setState({ selectedTicket: undefined })
  }

  componentDidMount() {
    getTickets()
      .then(res => {
        console.log("res==", res);
        if (res === 401) {
          this.setState({ error: { message: strings } })
        } else if (res === 404) {
          this.setState({ error: { message: strings.network_api_error } })
        } else if (res === strings.network_error_header) {
          this.setState({ error: { message: strings.network_api_error_msg } })
        } else {
          this.setState({ tickets: res })
        }
      })
      .catch(error => this.setState({ error }))
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage, selectedTicket } = this.state
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

