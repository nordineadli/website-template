import React from 'react';

const Menu = ({id,title,category,price,img,desc}) => {
return <article className='menu-item'>
<img src ={img} alt='title'/>
<div className='text'>
  <header>
    <p className='title'>{title}</p>
    <p className='price'>{price}</p>
  </header>
  <p className='desc'> {desc}</p>
</div>
</article>
};

export default Menu;
