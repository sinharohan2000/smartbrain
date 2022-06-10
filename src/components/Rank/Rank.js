import React from 'react';

const Rank = ({name,entries}) =>{
  return (
    <div>
      <div>
        <p className = 'white f3 ma0'>{` ${name}, your current count is ... `}</p>

      </div>
      <div>
        <p className = 'white f1 ma0'>{entries}</p>
      </div>
    </div>
  );
}

export default Rank;
