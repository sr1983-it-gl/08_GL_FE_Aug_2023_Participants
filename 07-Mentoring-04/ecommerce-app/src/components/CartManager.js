

import {CartItemsView} from "./CartItemsView"
import { CartPrices } from "./CartPrices"

const CartManager = ({cartItemsModel, addToCart, removeFromCart}) => {

  return (
    <div style={{backgroundColor : 'lightgreen'}}>
      <h2>Cart Items</h2>

      <hr/>
      {
        <CartItemsView cartItemsModel={cartItemsModel}
        addToCart={addToCart} removeFromCart={removeFromCart}
        ></CartItemsView>
      }

      <hr/>

      {
        <CartPrices cartItemsModel={cartItemsModel}></CartPrices>
      }

    <hr/>

    </div>
  )
}

export {CartManager}