import React from 'react';

const submit = props => (
  <button
    className="bg-black text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
    type="submit"
    style={{ transition: 'all .15s ease' }}>
    {props.children}
  </button>
)

export default submit;