import React from 'react';

const text = props => {
  return (
    <p className={`text- ${props.size ? 'text-' + props.size : '' } ${props.bold ? 'font-semibold' : 'font-light' } mt-2 ${props.color ? 'text-' + props.color : '' }`}>
      {props.children}
    </p>
  )
}

export default text;