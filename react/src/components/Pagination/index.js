import React from 'react'



const ticketListView = (props) => {
  let listArray = []
  for (let i = 0; i < props.totalPages; i++) {
    listArray.push(
      <li class={`page-item ${(props.currentPage === i) ? 'active' : ''}`}  key={i} id={i} onClick={() => props.onPageChange(i)}>
        <a className="page-link" href="#" >{i + 1}</a>
      </li>
    )
  }
  return listArray
}

const Pagination = (props) => (

  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class={`page-item ${props.currentPage === 0 ? 'disabled' : ''}`} onClick={() => props.onPageChange(props.currentPage - 1)}>
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo; </span>
        </a>
      </li>
      {ticketListView(props)}
      <li class={`page-item ${props.currentPage === (props.totalPages - 1) ? "disabled" : ''}`} onClick={() => props.onPageChange(props.currentPage + 1)}>
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo; </span>
        </a>
      </li>
    </ul>
  </nav>
)

export default Pagination