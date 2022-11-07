import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App () {
  const allCategories = ['all', ...new Set(items.map((item) => item.category))]; // new Set : not repeat the same value
  const [menu, setMenu] = useState(items)

  
  const filterItems = (category) => {
    
    if(category === 'all') {
      setMenu(items)
    }
    else {setMenu(items.filter(item => item.category === category))}
  }
  return <main>
    <h2>our menu</h2>
    <hr />
    <Categories list={allCategories} filterItems= {filterItems}/>
    <div className='menu'>
      {menu.map(item => {
        return <Menu key={item.id} {...item} />
      })}
    </div>
  </main>
}

export default App;
