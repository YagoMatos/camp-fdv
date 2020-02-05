import React from 'react';

import Title from '../../../Typography/Title/Title';
import Text from '../../../Typography/Text/Text';
const card = props => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
      <div className="px-4 py-5 flex-auto">
        <div className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full ${props.colorIcon}`}>
          <i className="fas fa-award"></i>
        </div>
        <Title size="xl">{props.title}</Title>
        <Text color="gray-600">{props.description}</Text>
      </div>
    </div>
  )
}

export default card;