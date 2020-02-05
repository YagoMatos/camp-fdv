import React from 'react';

const title = props => {
  return (
    <h4 className={`text-${props.size} font-bold text-${props.color}`}>
      {props.children}
    </h4>
  )
}

export default title;