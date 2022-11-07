import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ list, remove, clear, edit }) => {

  return <ul className='list'>
    {list.map((item, index) => {
      return <li key={index} className='list-item'>
        <p>{item}</p>
        <button className='btn edit' onClick={() => edit(index)}>
          <i><FaEdit /></i>
        </button>
        <button className='btn remove' onClick={() => remove(index)}>
          <i><FaTrash /></i>
        </button>
      </li>
    })}
    {list.length > 0 && <button className='clear' onClick={clear}>clear</button>}


  </ul>
}

export default List
