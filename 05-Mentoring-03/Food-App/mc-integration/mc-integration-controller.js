import { CartController } from "../cart/cart-controller.js"
import { MCIntegrationView } from "./mc-integration-view.js"

class MCIntegrationController {

  constructor(cartController) {

    this.cartController = cartController;
    this.mcIntegrationView = new MCIntegrationView(
      this.cartController.cartModel
    );
  }

  init() {

    this.addListeners()
  }
  
  addListeners() {
  
    this.addCartPlusButtonListener();
  }
  
  addCartPlusButtonListener() {
  
    const cartElement = document.getElementById('cart-plus');
    cartElement.addEventListener('click', (event) => {
  
      if (this.cartController.cartModel.hasItems()) {
  
        this.mcIntegrationView.displayToggleView();
      } else {
        alert("Currently no item in cart!");
      }
    });
  }  
  

}
export { MCIntegrationController }  
