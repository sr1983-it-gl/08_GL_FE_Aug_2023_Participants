import { FoodCategory } from "./food-category.js"

import {FoodItemUtils} from "../food-item/food-item-utils.js"


class FoodCategoryFactory {

  static FC_BIRYANI(){
   
    // 1-9
    // data.load(1).img
    const fcBiryani = new FoodCategory("biryani", "Biryani", 
      FoodItemUtils.load(5).imagePath);
    return fcBiryani;
  }

  static FC_CHICKEN(){
   
    // 10-15
    const fcChicken = new FoodCategory("chicken", "Chicken Delicious", 
      FoodItemUtils.load(10).imagePath);
    return fcChicken;
  }

  static FC_PANEER(){
   
    // 16-22
    const fcPaneer = new FoodCategory("paneer", "Paneer Mania", 
      FoodItemUtils.load(16).imagePath);
    return fcPaneer;
  }

  static FC_VEGETABLE(){
   
    // 23-29
    const fcVegetable = new FoodCategory("vegetable", "Pure Veg Dishes", 
     FoodItemUtils.load(23).imagePath);
    return fcVegetable;
  }

  static FC_CHINESE(){
   
    // 30-36
    const fcChinese = new FoodCategory("chinese", "Chinese Corner", 
      FoodItemUtils.load(30).imagePath);
    return fcChinese;
  }

  static FC_SOUTH_INDIAN(){
   
    // 37-44
    const fcSouthIndian = new FoodCategory("south indian", "South Indian", 
      FoodItemUtils.load(37).imagePath);
    return fcSouthIndian;
  }

  static getAllFoodCategories(){

    const allFoodCategories = new Array();

    allFoodCategories.push(FoodCategoryFactory.FC_BIRYANI());
    allFoodCategories.push(FoodCategoryFactory.FC_CHICKEN());
    allFoodCategories.push(FoodCategoryFactory.FC_PANEER());
    allFoodCategories.push(FoodCategoryFactory.FC_VEGETABLE());
    allFoodCategories.push(FoodCategoryFactory.FC_CHINESE());
    allFoodCategories.push(FoodCategoryFactory.FC_SOUTH_INDIAN());

    return allFoodCategories;
  }
}

export {FoodCategoryFactory}