// Write your code here
import './index.css'
import {Component} from 'react'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartlength = cartList.length
      const totalPrice = cartList.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      )
      return (
        <div className="A">
          <h1>
            Order Total: Rs <span className="B">{totalPrice}</span>/-
          </h1>
          <p>{cartlength} items in cart</p>
          <button type="button" className="butt">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
