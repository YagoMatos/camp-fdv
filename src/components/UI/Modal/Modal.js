import React, { Fragment, memo } from 'react';

import './Modal.css';

const Modal = memo(props => {
  return (
    <Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal">
      <div className={`p-3 text-center inline-flex items-center justify-center size mb-5 shadow-lg rounded-full ${props.feedback}`}>
          <i className={`far ${props.success ? 'fa-check-circle' : 'fa-times-circle'} fa-7x`}></i>
        </div>
        <h2>{props.children}</h2>
        <div className="modal__actions">
          <button type={`button-${props.feedback}`} onClick={props.onClose}>
            Ok
          </button>
        </div>
      </div>
    </Fragment>
  );
});

export default Modal;
