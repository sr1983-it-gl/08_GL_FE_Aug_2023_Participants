
import {foodItemsDataArray} from "./model/food-items-data.js"

import {FoodItem} from "./model/food-item-model.js"

import {FoodCategory} from "../food-category/food-category.js"

class FoodItemUtils {

  static loadFoodItems(foodCategoryObj){

    const foodItemModelObjs = new Array();

    foodItemsDataArray.forEach( (foodItemDataObj) => {

      if (foodItemDataObj.category == foodCategoryObj.id){

        const foodItemModelObj 
          = FoodItemUtils.convert(foodItemDataObj);
        foodItemModelObjs.push(foodItemModelObj);
      }
    })
    
    return foodItemModelObjs;
  }

  static load(foodItemId){

    const foodItemDataReturnObj = 
    foodItemsDataArray.find( (foodItemDataObj) => 
      foodItemDataObj.id === foodItemId
    )

    const foodItemModelObj 
      = FoodItemUtils.convert(foodItemDataReturnObj);
    return foodItemModelObj;
  }

  static convert(foodItemDataObj){

    // TODO - Fix the category
    const foodItemModelObj = new FoodItem(
      foodItemDataObj.id,
      foodItemDataObj.name,
      foodItemDataObj.category,
      foodItemDataObj.rating,
      foodItemDataObj.price,
      foodItemDataObj.img
    )

    return foodItemModelObj;
  }
}

export {FoodItemUtils}