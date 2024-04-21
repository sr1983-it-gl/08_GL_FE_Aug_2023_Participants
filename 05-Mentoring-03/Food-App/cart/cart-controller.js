import { CartModel } from "./cart-model.js"
import { CartView } from "./cart-view.js"

class CartController {

  constructor() {

    this.cartModel = this.createSampleCartModel();
    this.cartView = new CartView(this.cartModel);
  }

  init() {
    this.cartView.render();
  }

  createSampleCartModel() {

    const sampleCartModel = new CartModel();

    sampleCartModel.add(1);
    sampleCartModel.add(10);
    sampleCartModel.add(1);
    sampleCartModel.add(5);
    sampleCartModel.add(10);
    sampleCartModel.add(1);

    return sampleCartModel;
  }
}

export { CartController }
