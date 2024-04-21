// import { FoodItem } from "../food-item/model/food-item.js";
// import { FoodItemUtils } from "../food-item/food-item-utils.js";

import {FoodItem} from "../food-item/model/food-item-model.js"
import {FoodItemUtils} from "../food-item/food-item-utils.js"

class CartModel {

  constructor() {

    this.items = new Map();
  }

  getItems() {
    return this.items;
  }

  getQuantity(foodItemId) {

    foodItemId = this.asNumber(foodItemId);

    const itemPresent = this.items.has(foodItemId);
    if (itemPresent) {
      let existingQuantity = this.items.get(foodItemId);
      return existingQuantity;
    } else {
      return 0;
    }
  }

  isItemPresent(foodItemId) {

    foodItemId = this.asNumber(foodItemId);

    const itemPresent = this.items.has(foodItemId);
    if (itemPresent) {
      return true;
    } else {
      return false;
    }
  }

  add(foodItemId) {

    foodItemId = this.asNumber(foodItemId);
    const itemPresent = this.isItemPresent(foodItemId);

    if (itemPresent) {

      let existingQuantity = this.items.get(foodItemId);
      existingQuantity++;
      this.items.set(foodItemId, existingQuantity);
    } else {
      this.items.set(foodItemId, 1);
    }
  }

  remove(foodItemId) {

    foodItemId = this.asNumber(foodItemId);
    const itemPresent = this.isItemPresent(foodItemId);

    if (itemPresent) {
      let existingQuantity = this.items.get(foodItemId);

      if (existingQuantity === 1) {
        // Remove Entry
        this.items.delete(foodItemId);
      } else {
        existingQuantity--;
        this.items.set(foodItemId, existingQuantity);
      }
    }
  }

  hasItems() {
    return this.items.size > 0;
  }

  asNumber(str) {
    return parseInt(str);
  }

  getTotalItems() {

    return this.items.size;
  }

  getSum() {

    let sum = 0;

    for (let foodItemId of this.items.keys()) {

      console.log(`Food Item ID ${foodItemId}`);
      const foodItemObj
        = FoodItemUtils.load(foodItemId);

      const noOfItems = this.items.get(foodItemId);
      sum = sum + (noOfItems * foodItemObj.price);
    }

    return sum;
  }
}

export { CartModel };    
