
import {Row, Col} from "react-bootstrap"

const CartPrices = ({cartItemsModel}) => {

  const calculateItemsPrice = () => {

    let itemsPrice = 0;

    cartItemsModel.forEach( (cartItemModel) => {

      const itemPrice = 
      cartItemModel.quantity * cartItemModel.product.price

      itemsPrice = itemsPrice + itemPrice
    })
    return itemsPrice
  }

  const calculateTaxPrice = () => {

    return (calculateItemsPrice() * 10) / 100
  }

  const calculateShippingPrice = () => {
    return 500
  }

  const calculateTotalPrice = () => {

    return calculateItemsPrice() + calculateTaxPrice() + calculateShippingPrice()
  }

  return (

    <div>

      <Row>
        <Col>Items Price</Col>
        <Col>{calculateItemsPrice()}</Col>
      </Row>

      <Row>
        <Col>Tax Price</Col>
        <Col>{calculateTaxPrice()}</Col>
      </Row>

      <Row>
        <Col>Shipping Price</Col>
        <Col>{calculateShippingPrice()}</Col>
      </Row>

      <Row>
        <Col>Total Price</Col>
        <Col>{calculateTotalPrice()}</Col>
      </Row>

    </div>
  )
}

export {CartPrices}