import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart, clear, getTotals } = useGlobalContext();
  const {price} = () => getTotals().price

  return <section className='cart'>
    <h1>your bag</h1>
    {cart.map((item, index) => {
      return <CartItem key={index} item={item} />
    })}
    <hr />
    <p>total</p>
    <p>${price}</p>
    <button className='clear' onClick={clear}>clear cart</button>
  </section>
}

export default CartContainer
