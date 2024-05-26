
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Col } from "react-bootstrap"

const ProductView = ({ productModel, addToCart, removeFromCart }) => {

  // function localAddToCart() {

  //   console.log('Local -> Add To Cart')
  // }

  function productComponent() {
    return (

      <Col className='my-2'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={productModel.image} />
          <Card.Body>
            <Card.Title>{productModel.name}</Card.Title>
            <Card.Text>
              {productModel.price}
            </Card.Text>

            <Button variant="primary" onClick={ () => {
              
             addToCart(productModel)

            }}>Add to Cart</Button>

            <Button variant="primary" onClick={ () => {
              
              removeFromCart(productModel)
 
             }}>Remove from Cart</Button>
 
          </Card.Body>
        </Card>
      </Col>
    );
  }

  return (
    productComponent()
  )
}

export { ProductView }