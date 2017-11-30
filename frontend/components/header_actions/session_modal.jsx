import React from 'react';
import ReactModal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

class SessionModal extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ showModal: false });
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render () {
    const buttonText = this.props.formType === 'signup' ? 'SIGN UP' : 'SIGN IN';
    return (
      <div>
        <button onClick={this.handleOpenModal}>{buttonText}</button>
        <ReactModal
           isOpen={this.state.showModal}
           contentLabel={buttonText}
           onRequestClose={this.handleCloseModal}
           className="modal"
           style={{
             overlay: {
               backgroundColor: 'rgba(0, 0, 0, 0.55)'
             }
           }}
        >
          <SessionFormContainer formType={this.props.formType} handleCloseModal={this.handleCloseModal} />
        </ReactModal>
      </div>
    );
  }
}

export default SessionModal;
