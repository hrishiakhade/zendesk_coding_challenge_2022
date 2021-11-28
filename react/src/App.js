import React, { Component, Touch } from 'react';
import { getTickets } from './utils/api-helpers';
import './App.css';
import Header from './components/Header'
import strings from './utils/constants/strings.js'
import { getTotalPages, getPaginatedTickets } from './utils/common-helpers'
import Pagination from './components/Pagination';
import TicketList from './components/TicketList';
import TicketDetailsModal from './components/TicketDetailsModal';
import ErrorComponenet from './components/ErrorMsg';
import loader from './assets/loader.svg'

export default class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 25,
    selectedTicket: null,
    totalTickets: 0,
    totalPages: 0,
    currentPageTickets: null,
    loading: false
  }



  onClickTicket = (ticketData) => {
    console.log("ticketData===", ticketData);
    this.setState({ selectedTicket: ticketData })

  }

  componentDidMount() {
    this.setState({ loading: true })
    getTickets()
      .then(res => {
        if (res === 401) {
          this.setState({ error: { message: strings.network_auth_error }, loading: false })
        } else if (res === 404) {
          this.setState({ error: { message: strings.network_api_error }, loading: false })
        } else if (res === strings.network_error_header) {
          this.setState({ error: { message: strings.network_api_error_msg }, loading: false })
        } else {
          this.state.totalTickets = res?.length ? res.length : 0;
          this.state.totalPages = getTotalPages(this.state.ticketsPerPage, this.state.totalTickets);
          this.state.tickets = getPaginatedTickets(this.state.ticketsPerPage, res, this.state.totalPages);
          this.setState({
            tickets: this.state.tickets,
            loading: false,
            currentPageTickets: this.state.tickets[this.state.currentPage],
            error: null
          })
        }
      })
      .catch(error => this.setState({ error, loading: false }))
  }

  onPageChange = (newPageNumber) => {
    if (newPageNumber > -1) {
      this.setState({
        currentPage: newPageNumber,
        currentPageTickets: this.state.tickets?.length ? this.state.tickets[newPageNumber] : []
      })
    }
  }

  resetSelectedTicket = () => {
    this.setState({
      selectedTicket: null
    })
  }

  render() {
    const { currentPage, totalPages, totalTickets, currentPageTickets, selectedTicket, error, loading } = this.state
    return (
      <div className="App" id="App">
        <Header />
        {loading ?
          <img className="loader" src={loader} alt="loading" /> :
          error ? <ErrorComponenet message={this.state?.error?.message} /> :
            totalTickets > 0 ?
              <div>
                <p>{strings.total_tickets} {totalTickets}</p>
                {<p>Page {currentPage + 1} of {totalPages}</p>}
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalTickets={totalTickets}
                  onPageChange={this.onPageChange}
                />
                <TicketList
                  currentPageTickets={currentPageTickets}
                  onClickTicket={this.onClickTicket}
                />
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  totalTickets={totalTickets}
                  onPageChange={this.onPageChange}
                />

                <TicketDetailsModal
                  selectedTicket={selectedTicket}
                  resetSelectedTicket={this.resetSelectedTicket}
                />
              </div > : <div>
                <p>{strings.no_tickets}</p>
              </div>}
      </div>
    );
  }
}

