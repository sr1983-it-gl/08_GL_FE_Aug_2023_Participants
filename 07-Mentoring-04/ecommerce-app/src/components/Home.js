
import { CartManager } from "./CartManager"
import { Header } from "./Header"
import { ProductsLister } from "./ProductsLister"

import { Container, Row, Col } from "react-bootstrap"
import { products } from "../products"

import { useState } from "react"
const Home = () => {

  const defaultCartItemsModel = [
    {
      "product": products[0],
      "quantity": 2
    },
    {
      "product": products[2],
      "quantity": 4
    },
    {
      "product": products[4],
      "quantity": 5
    },
    {
      "product": products[6],
      "quantity": 7
    }
  ]

  const [cartItemsModel, setCartItemsModel] = useState([])

  const addToCart = (productItem) => {

    const matchingCartItem
      = cartItemsModel.find((cartItemModel) => (

        cartItemModel.product.id === productItem.id

      ))

    if (matchingCartItem) {

      const updatedCartItems = cartItemsModel.map((cartItemModel) => {

        if (cartItemModel.product.id === productItem.id) {

          const updatedCartItem = {
            product: cartItemModel.product,
            quantity: cartItemModel.quantity + 1
          }

          return updatedCartItem;

        } else {

          const newCartItem = {
            product: cartItemModel.product,
            quantity: cartItemModel.quantity
          }

          return newCartItem;
        }

      })

      // const updatedCart = {
      //   cartItemsModel: updatedCartItems
      // }

      setCartItemsModel(updatedCartItems);

    } else {

      const newCartItem = {
        product: productItem,
        quantity: 1
      }

      console.log(JSON.stringify(newCartItem))

      const updatedCartItemsModel = [
        ...cartItemsModel, newCartItem
      ]

      console.log(JSON.stringify(updatedCartItemsModel))

      // const updatedCart = {
      //   cartItemsModel: updatedCartItemsModel
      // }

      // console.log(JSON.stringify(updatedCart))

      // updateCart -> 4
      setCartItemsModel(updatedCartItemsModel);

      console.log("Cart Items Model -> ")
      console.log(JSON.stringify(cartItemsModel))

    }

  }



  const removeFromCart = (productItem) => {

    // scenario-1
    // Initial State
      // cartItems -> 3
      // Prod1, 3, 10000
      // Prod2, 4, 20000
      // Prod3, 5, 30000


      // RemoveCart -> Prod2

    // Current State
    // updatedCartItems
      // Prod1, 3, 10000
      // Prod2, 3, 20000
      // Prod3, 5, 30000

    // sccenario-2
    // cartItems -> 3
    // Initial State
      // Prod1, 3, 10000
      // Prod2, 1, 20000
      // Prod3, 5, 30000

      // Remove From Cart -> Prod2

    // updatedCartItems

      // Current State
      // Prod1, 3, 10000
      // Prod3, 5, 30000

    const updatedCartItems = [];

    cartItemsModel.forEach((cartItemModel) => {

      if (cartItemModel.product.id == productItem.id) {

        if (cartItemModel.quantity == 1) {

          // TODO

          // Dont do anything
        } else {

          const updatedCartItemModel = {
            product: cartItemModel.product,
            quantity: cartItemModel.quantity - 1
          }

          updatedCartItems.push(updatedCartItemModel);
        }
      } else {
        updatedCartItems.push(cartItemModel);
      }
    })

    setCartItemsModel(updatedCartItems)

  }


  return (
    <Container>

      <Row>
        <Col>
          {
            <Header></Header>
          }
        </Col>
      </Row>

      <Row>
        <Col lg={9}>
          {
            <ProductsLister addToCart={addToCart} removeFromCart={removeFromCart}></ProductsLister>
          }

        </Col>
        <Col lg={3}>
          {
            <CartManager
              cartItemsModel={cartItemsModel}
              addToCart={addToCart} removeFromCart={removeFromCart}
            ></CartManager>
          }

        </Col>
      </Row>



    </Container>
  )
}

export { Home }