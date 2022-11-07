import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


const Review = () => {

  const [index, setIndex] = useState(2);
  const { id, name, job, image, text } = people[index];

  const next = () => {
    setIndex(index + 1)

    if (index == people.length - 1) {
      setIndex(0)
    }
  }

  const prev = () => {
    setIndex(index - 1)

    if (index == 0) {
      setIndex(people.length - 1)
    }
  }

  const random = () => {
    setIndex(Math.floor(Math.random() * people.length));
  }

  return (
    <div className='reviews'>
      <img src={image} alt={name} />
      <p className='name'>{name}</p>
      <p className='job'>{job}</p>
      <p className='text'>{text}</p>

      <div className='btn-container'>
        <button className='btn next' onClick={next}><FaChevronLeft /></button>
        <button className='btn prev' onClick={prev}><FaChevronRight /></button>
      </div>

      <button className='random-btn' onClick={random}>
        Random
      </button>

    </div>
  )
};

export default Review;
