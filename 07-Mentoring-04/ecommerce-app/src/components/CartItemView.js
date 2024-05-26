
import {Row, Col} from "react-bootstrap"

import {Button} from "react-bootstrap"

const CartItemView = ({cartItemModel, addToCart, removeFromCart}) => {

  return (

    <Row>

      <Col>
      {cartItemModel.product.name}
      </Col>

      <Col lg={2}>
        <Button variant="primary" onClick={ () => {
              
              removeFromCart(cartItemModel.product)
 
        }}>-</Button>
        
      </Col>

      <Col lg={2}>
      <Button variant="primary" onClick={ () => {
              
              addToCart(cartItemModel.product)
 
        }}>+</Button>
      </Col>

      <Col>
      {cartItemModel.quantity} * {cartItemModel.product.price}      
      </Col>

    </Row>
  )
  
}

export {CartItemView}