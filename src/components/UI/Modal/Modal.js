import React, * as react from 'react';

import Button from '../Buttons/Button/Button';
import Title from '../../Typography/Title/Title';
import './Modal.css';

const Modal = react.memo(props => {
  let payment = '';
  let message = ''
  if (props.method === 'Cartao') {
    payment = (
      <div className="credit">
        <p className="desc-credit">Finalize agora seu Pagamento!</p>
        <Button link={'https://pag.ae/7VJU96fS5'}>Pague Aqui</Button>
      </div>
    );

    message = 'Pagar mais Tarde'
  } else {
    payment = (
      <div className="billet">
        <p className="desc-credit">Entraremos em contato para informar como irá funcionar o parcelamento pelo Boleto! </p>
      </div>
    )

    message = 'Ok'
  }
  return (
    <react.Fragment>
      <div className="backdrop" onClick={props.onClose} />
      <div className="modal">
        <div
          className={`p-3 text-center inline-flex items-center justify-center size mb-5 shadow-lg rounded-full ${props.feedback}`}
        >
          <i
            className={`far ${
              props.success ? 'fa-check-circle' : 'fa-times-circle'
            } fa-7x`}
          ></i>
        </div>
        <Title size='2xl' >{props.children}</Title>
        {payment}
        <div className="modal__actions">
          <button type={`button-${props.feedback}`} onClick={props.onClose}>
            {message}
          </button>
        </div>
      </div>
    </react.Fragment>
  );
});

export default Modal;
