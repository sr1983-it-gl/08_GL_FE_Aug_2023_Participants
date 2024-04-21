
import { CartModel } from "../cart/cart-model.js"

class MCIntegrationView {

  constructor(cartModel) {
    this.cartModel = cartModel;
  }


  displayToggleView(){

    document.getElementById('food-items').classList.toggle('food-items');
    document.getElementById('category-list').classList.toggle('food-items');
    document.getElementById('category-header').classList.toggle('toggle-category');
    document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
    document.getElementById('cart-page').classList.toggle('cart-toggle');
    document.getElementById('checkout').classList.toggle('cart-toggle');
  }  
  
}

export { MCIntegrationView }    
