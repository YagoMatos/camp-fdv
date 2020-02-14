import React from 'react';

import Title from '../../../Typography/Title/Title';
import Text from '../../../Typography/Text/Text';

import './SimpleCard.css';
const card = props => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-black-trans w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${props.colorIcon}`}>
          <i className={props.icon}></i>
        </div>
        <Title size="xl" color="white"><strong>{props.title}</strong></Title>
        <Text color="white">{props.description}</Text>
      </div>
    </div>
  )
}

export default card;