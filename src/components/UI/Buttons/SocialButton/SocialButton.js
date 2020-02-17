import React from 'react';

import './SocialButton.css';

const socialButton = props => {
  return (
    <button
      className="bg-white text-blue-600 shadow-lg h-10 w-10 rounded-full focus:outline-none mr-2"
      type="button">
      <a href={props.link}>
        <i className={`fab fa-${props.social}-square`}></i>
      </a>
    </button>
  )
}

export default socialButton;