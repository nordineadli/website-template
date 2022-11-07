import React from 'react'
import { useGlobalContext } from './context'

const CartItem = ({ item }) => {
  const { inc, dec, remove } = useGlobalContext()
  const { id, title, price, img, amount } = item
  return <article className='cart-item'>
    <img src={img} alt={title} />
    <div className='info'>
      <p className='product'>{title}</p>
      <p className='price'>${price}</p>
      <button className='remove' onClick={() => remove(id)}>remove</button>
    </div>
    <div className='cart-select'>
      <button className='qtty' onClick={() => inc(id)}>up</button>
      <p>{amount}</p>
      <button className='qtty' onClick={() => dec(id)}>down</button>
    </div>
  </article>
}

export default CartItem
