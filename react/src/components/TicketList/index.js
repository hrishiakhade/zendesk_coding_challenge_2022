import React from "react";
import { formatDate } from "../../utils/common-helpers";
import strings from "../../utils/constants/strings";

const TicketList = (props) => (
  <div class="list-group">
    {props?.currentPageTickets?.map((item) => {
      let status=item.status;
      return (
        <a
          key={item.id}
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action "
          aria-current="true"
          onClick={() => props.onClickTicket(item)}
        >
          <div class="d-flex w-100 text-left align-items-center pt-1 pb-1">
            <span className="w-10 id-style" >
              {strings.id}
              {item.id}
            </span>
            <div className="w-80">
              <h5 className="mb-1 ticket-title-description" >{item.subject}</h5>
              <p className="ticket-item-description mb-0">{item.description}</p>
            </div>
            <div className="w-10">
              <span className="d-flex mb-1 date">
                {formatDate(item.created_at)}
              </span>
              <small className={`status-pill ${status=='close' ? 'close' : status=='pending' ? 'pending' : 'open'}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </small>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);

export default TicketList;
