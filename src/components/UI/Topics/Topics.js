import React from 'react';

const topics = props => {
  
  const content = props.children.map((chd, key) => (
      <li key={key} className="py-2">
        <div className="flex items-center">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
              <i className="fas fa-fingerprint"></i>
            </span>
          </div>
          {chd}
        </div>
      </li>
    )
  );

  return (
    <ul className="list-none mt-6">
     {content}
    </ul>
  )
}

export default topics;