import React from 'react'
import { formatDate } from '../../utils/common-helpers';
import strings from '../../utils/constants/strings';

const TicketList = (props) => (
    <div class="list-group">
        {props?.currentPageTickets?.map(item => {
            return (
                <a key={item.id} style={{cursor:'pointer'}} className="list-group-item list-group-item-action " aria-current="true" onClick={()=>props.onClickTicket(item)} >
                    <div class="d-flex w-100 justify-content-between">
                        <small>{strings.id}{item.id}</small>
                        <h5 class="mb-1">{item.subject}</h5>
                        <small>{formatDate(item.created_at)}</small>
                    </div>
                    <div class="d-flex w-100 justify-content-between">
                        <p class="mb-1" className="ticket-item-description">{item.description}</p>
                        <small>{strings.status}{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</small>
                    </div>
                </a>
            )
        })}
    </div>
)

export default TicketList