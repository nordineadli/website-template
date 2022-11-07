import React from 'react';

const Categories = ({ list, filterItems }) => {

  return <nav className='btn-container'>
    {list.map((category, index) => {
      return <button key={index} className='btn' onClick={() => filterItems(category)}>
        {category}
      </button>
    })}
  </nav>
};

export default Categories;
