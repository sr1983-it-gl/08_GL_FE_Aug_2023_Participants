import { ProductsView } from "./ProductsView"

const ProductsLister = ({addToCart, removeFromCart}) => {
  return (

    <div style={{ backgroundColor: 'lightblue' }}>

      <h2> Listing of Products </h2>

      <ProductsView addToCart={addToCart} removeFromCart={removeFromCart}></ProductsView>
    </div>
  )
}

export { ProductsLister }