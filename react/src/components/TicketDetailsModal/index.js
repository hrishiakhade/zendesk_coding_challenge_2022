import React from 'react'
import Modal from 'react-modal'
import '../../App.css';
import { formatDate } from '../../utils/common-helpers';
import strings from '../../utils/constants/strings';
Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        border: '.5px dotted lightgray',
        borderRadius: '10px',
        minWidth:"80%",
        minHeight:"60%",
        maxHeight:"600px",
        maxWidth:"800px",
        zindex:99,
        boxShadow: '0px 8px 15px rgba(207, 207, 207, 0.7)',
        
    },
};

const TicketDetailsModal = (props) => (
    <Modal
        isOpen={props?.selectedTicket ? true : false}
        contentLabel={`${strings.ticket_hash}${props?.selectedTicket?.id} Details`}
        onRequestClose={props.resetSelectedTicket}
        closeTimeoutMS={200}
        style={customStyles}
    >
        {props?.selectedTicket &&
            <div>
                <p className="text-left dotted-line">{strings.req_id}{props.selectedTicket.requester_id}</p>
                <p className="text-left dotted-line">{strings.assign_id}{props.selectedTicket.assignee_id}</p>
                <h4>{strings.ticket_hash}{props.selectedTicket.id +' '+props.selectedTicket.subject}</h4>
                <p className="ticket-modal__description">{props.selectedTicket.description}</p>
                <div className="ticket-list-item__header">
                    <p>
                        <span className="date">{formatDate(props.selectedTicket.created_at)}</span>
                        <span className="right"> {strings.status+' '+props.selectedTicket.status.charAt(0).toUpperCase() + props.selectedTicket.status.slice(1)}</span>
                    </p>
                </div>
            </div>
        }
        <button className="button" onClick={() => props.resetSelectedTicket()}>CLOSE</button>
    </Modal>
)

export default TicketDetailsModal