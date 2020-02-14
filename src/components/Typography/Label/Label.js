import React from 'react';

const label = props => (
  <label
    className="block uppercase text-black text-xs font-bold mb-2"
    htmlFor="full-name">
    {props.children}
  </label>
)

export default label;