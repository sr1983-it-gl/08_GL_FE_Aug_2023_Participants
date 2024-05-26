
import { products } from "../products.js"

import { Row } from "react-bootstrap"
import { ProductView } from "./ProductView.js"

const ProductsView = ({addToCart, removeFromCart}) => {

  return (

    <div>
      <Row>

        {
          products.map((productModel) => {

            return (
              <ProductView productModel={productModel} addToCart={addToCart}removeFromCart={removeFromCart}></ProductView>
            )

          })
        }
      </Row>

    </div>

  )

}

export { ProductsView }