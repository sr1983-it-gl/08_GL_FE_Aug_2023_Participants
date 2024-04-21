
import {FoodCategory} from "../food-category/food-category.js"

import {FoodItemUtils} from "../food-item/food-item-utils.js"

import { FoodItemView } from "../food-item/view/food-item-view.js";
import {FoodCategoryView} from "../food-category/food-category-view.js"

class MainView {

  constructor(foodCategories){

    this.foodCategories = foodCategories;
  }

  render(){

    this.renderMainPanel();
    this.renderSidePanel();
    
  }

  renderMainPanel(){

    this.foodCategories.forEach( (foodCategoryObj) => {

      console.log("Food Category Obj" + JSON.stringify(foodCategoryObj));

      const foodItemModelObjs 
        = FoodItemUtils.loadFoodItems(foodCategoryObj)

      console.log("Food Item model Objs" + JSON.stringify(foodItemModelObjs));

      foodItemModelObjs.forEach( (foodItemModelObj) => {

        const foodItemViewObj = new FoodItemView(foodItemModelObj);
        const foodItemHtmlFragment = foodItemViewObj.render();

        console.log("foodItemHtmlFragment " + JSON.stringify(foodItemHtmlFragment))

        foodItemViewObj.positionUnderTheRightCategory(
          foodItemHtmlFragment, foodCategoryObj
        )

      })
    })
  }

  renderSidePanel(){

    this.foodCategories.forEach( (foodCategoryObj) => {

      const foodCategoryView = new FoodCategoryView(foodCategoryObj);
      const foodCategoryHtmlFragment = foodCategoryView.render();
      
      foodCategoryView.positionCategoryUnderTheRightParent(foodCategoryHtmlFragment);
      
    })
  }
}

export {MainView}