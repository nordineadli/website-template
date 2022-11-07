import React from 'react';
import Tour from './Tour';
const Tours = ({ list, removeTour }) => {

  return <div className='tours'>
    {list.map(listItem => {
      return <Tour key={listItem.id} prop={listItem} removeTour={removeTour} />
    })}
  </div>
};

export default Tours;
