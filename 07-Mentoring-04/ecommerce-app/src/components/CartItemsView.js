import { CartItemView } from "./CartItemView"

const CartItemsView = ({cartItemsModel, addToCart, removeFromCart}) => {

  return (
    <div>

      {
        cartItemsModel.map( (cartItemModel) => {

          return (
            <CartItemView cartItemModel={cartItemModel}
            addToCart={addToCart} removeFromCart={removeFromCart}
            ></CartItemView>
          )
        })
      }
      

    </div>
  )

}

export {CartItemsView}