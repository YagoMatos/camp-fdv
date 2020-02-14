import React from 'react';
import './Title.css'
const title = props => {
  return (
    <h4 className={`text-${props.size} text-${props.color}`}>
      {props.children}
    </h4>
  )
}

export default title;