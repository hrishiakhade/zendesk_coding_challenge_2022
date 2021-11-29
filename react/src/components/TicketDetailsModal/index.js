import React from "react";
import Modal from "react-modal";
import "../../App.css";
import { formatDate } from "../../utils/common-helpers";
import strings from "../../utils/constants/strings";
// Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: ".5px dotted lightgray",
    borderRadius: "10px",
    // minWidth: "80%",
    // minHeight: "60%",
    maxHeight: "600px",
    maxWidth: "800px",
    zindex: 99,
    boxShadow: '0px 8px 15px rgba(207, 207, 207, 0.7)',
  },
};

const TicketDetailsModal = (props) => (
  <div>
    <Modal
      isOpen={props?.selectedTicket ? true : false}
      contentLabel={`${strings.ticket_hash}${props?.selectedTicket?.id} Details`}
      onRequestClose={props.resetSelectedTicket}
      closeTimeoutMS={200}
      style={customStyles}
    >
      <div className="m-3">
        <span onClick={() => props.resetSelectedTicket()} className="cross">
          x
        </span>
        <h4>
          {strings.ticket_hash}
          {props?.selectedTicket?.id + " " + props?.selectedTicket?.subject}
        </h4>
        {props?.selectedTicket && (
          <div>
            <div className="d-flex flex-row">
              <strong className="text-left">
                {strings.req_id}
                {props.selectedTicket.requester_id}
              </strong>
              <strong className="text-left ml-auto">
                {strings.assign_id}
                {props.selectedTicket.assignee_id}
              </strong>
            </div>
            <div className="d-flex flex-row">
              <span className="date text-left" style={{paddingTop:'3px'}}>
                {formatDate(props.selectedTicket.created_at)}
              </span>
              <span className={`status-pill text-left ml-auto ${props.selectedTicket.status=='close' ? 'close' : props.selectedTicket.status=='pending' ? 'pending' : 'open'}`}>
                {" "}
                {
                  props.selectedTicket.status.charAt(0).toUpperCase() +
                  props.selectedTicket.status.slice(1)}
              </span>
            </div>
            <br />
            <p>{props.selectedTicket.description}</p>
          </div>
        )}
      </div>
    </Modal>
  </div>
);

export default TicketDetailsModal;
