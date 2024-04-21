import { CartController } from "../cart/cart-controller.js";
import { FoodCategoryFactory } from "../food-category/food-category-factory.js"
import { MainView } from "./main-view.js";

import {MCIntegrationController} from "../mc-integration/mc-integration-controller.js"

class MainController {

  init(){

    const foodCategories = FoodCategoryFactory.getAllFoodCategories();

    const mainView = new MainView(foodCategories);
    mainView.render();

    const cartController = new CartController();
    cartController.init();

    const mcIntegrationController = 
      new MCIntegrationController(cartController);
    mcIntegrationController.init();
  }

}


// M
// V -> M
// C -> [M / V]

export {MainController}