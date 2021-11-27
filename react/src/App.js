import React, { Component, Touch } from 'react';
import { getTickets } from './utils/api-helpers';
import './App.css';
import Header from './components/Header'
import strings from './utils/constants/strings.js'
import { getTotalPages, getPaginatedTickets } from './utils/common-helpers'

export default class App extends Component {
  state = {
    tickets: null,
    error: null,
    currentPage: 0,
    ticketsPerPage: 25,
    selectedTicket: undefined,
    totalTickets: 0,
    totalPages: 0,
    currentPageTickets: null
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
        console.log("res==", res.length);
        if (res === 401) {
          this.setState({ error: { message: strings } })
        } else if (res === 404) {
          this.setState({ error: { message: strings.network_api_error } })
        } else if (res === strings.network_error_header) {
          this.setState({ error: { message: strings.network_api_error_msg } })
        } else {
          this.state.totalTickets = res?.length ? res.length : 0;
          this.state.totalPages = getTotalPages(this.state.ticketsPerPage, this.state.totalTickets);
          this.state.tickets = getPaginatedTickets(this.state.ticketsPerPage, res, this.state.totalPages);
          this.setState({
            tickets: this.state.tickets,
            currentPageTickets: this.state.tickets[this.state.currentPage]
          }, () => {
            console.log("currentPageTickets====", this.state.currentPageTickets);
          })
        }
      })
      .catch(error => this.setState({ error }))
  }

  onPageChange = (newPageNumber) => {
    if(newPageNumber>-1){
      this.setState({
        currentPage: newPageNumber,
        currentPageTickets:this.state.tickets?.length ? this.state.tickets[newPageNumber] : []
      })
    }
  }

  ticketListView = () => {
    let listArray = []
    for (let i = 0; i < this.state.totalPages; i++) {
      listArray.push(
        <li class={`page-item ${this.state.currentPage === i ? 'active' : ''}`} key={i} id={i} onClick={() => this.onPageChange(i)}>
          <a class="page-link" href="#" >{i + 1}</a>
        </li>
      )
    }
    return listArray
  }

  renderPaginationView = () => {
    return (
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class={`page-item ${this.state.currentPage===0 ? 'disabled' : ''}`} onClick={()=>this.onPageChange(this.state.currentPage-1)}>
            <a class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo; </span>
            </a>
          </li>
          {this.ticketListView()}
          <li class={`page-item ${this.state.currentPage === (this.state.totalPages - 1) ? "disabled" : ''}`} onClick={()=>this.onPageChange(this.state.currentPage+1)}>
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo; </span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }

  render() {
    const { tickets, ticketsPerPage, error, currentPage, selectedTicket, totalPages, totalTickets, currentPageTickets } = this.state
    return (
      <div className="App">
        <Header />
        <p>Total Tickets : {totalTickets}</p>
        <p>Page {currentPage + 1} of {totalPages}</p>
        {this.renderPaginationView()}
      </div >
    );
  }
}

