// Write your code here
import './index.css'
import {useState} from 'react'
import Popup from 'reactjs-popup'
import CartContext from '../../context/CartContext'

const CartSummary = () => {
  const [option, setoption] = useState('')
  const [status, setstatus] = useState(false)
  const onChange1 = event => {
    setoption(event.target.value)
  }
  const onClick1 = () => {
    setstatus(true)
  }
  return (
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
            <Popup
              modal
              trigger={
                <button type="button" className="butt1">
                  Checkout
                </button>
              }
              contentStyle={{
                width: '50vw',
                maxWidth: '600px',
                height: '60vh',
                backgroundColor: '#ffffff',
                padding: '10px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
              }}
              overlayStyle={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
              }}
            >
              {close => (
                <div className="popup1">
                  <h1>Select Payment Method</h1>
                  <form className="radio-group">
                    <label>
                      <input
                        type="radio"
                        value="card"
                        checked={option === 'card'}
                        onChange={onChange1}
                        disabled
                      />
                      Card
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="upi"
                        checked={option === 'upi'}
                        onChange={onChange1}
                        disabled
                      />
                      UPI
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="net banking"
                        checked={option === 'net banking'}
                        onChange={onChange1}
                        disabled
                      />
                      Net Banking
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="wallet"
                        checked={option === 'wallet'}
                        onChange={onChange1}
                        disabled
                      />
                      Wallet
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="cash on delivery"
                        checked={option === 'cash on delivery'}
                        onChange={onChange1}
                      />
                      Cash On Delivery
                    </label>
                  </form>
                  <div className="details">
                    <p>
                      Order Total: Rs <span className="B">{totalPrice}</span>/-
                    </p>
                    <p>{cartlength} items in cart</p>
                  </div>
                  <button
                    onClick={onClick1}
                    type="button"
                    className="butt1"
                    disabled={!option}
                  >
                    Confirm Order
                  </button>
                  {status && (
                    <div className="msg">
                      <p className="msg1">
                        Your order has been placed successfully
                      </p>
                      <button className="butt1" onClick={close}>
                        Close
                      </button>
                    </div>
                  )}
                </div>
              )}
            </Popup>
          </div>
        )
      }}
    </CartContext.Consumer>
  )
}
export default CartSummary
