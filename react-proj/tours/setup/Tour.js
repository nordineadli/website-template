import React, { useState } from 'react';

const Tour = ({ prop, removeTour }) => {
  const { id, name, info, image, price } = prop
  return <div className='tour'>
    <div className='img-container'>
      <img src={image} alt={name} />
    </div>
    <div className='header'>
      <p>{name}</p>
      <p>{price}</p>
    </div>
    <p className='desc'>
      {info}
    </p>
    <button className='clear' onClick={() => removeTour(id)}>Not Interested</button>
  </div>
};

export default Tour;
