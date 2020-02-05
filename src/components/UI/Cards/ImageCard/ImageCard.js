import React from 'react';

const imageCard = props => {
  return (
    <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
      <img
        alt="..."
        className="max-w-full rounded-lg shadow-lg"
        src={props.url}
      />
    </div>
  )
}

export default imageCard;