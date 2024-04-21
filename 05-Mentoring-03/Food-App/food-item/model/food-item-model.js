

class FoodItem {

  constructor(id, name, categoryObj, userRating, price, imagePath){

    this.id = id;
    this.name = name;
    this.categoryObj = categoryObj;
    this.userRating = userRating;
    this.price = price;

    // Incoming imagePath -> 'images/biryani/Ambur-Chicken-Biryani.jpg'

    // Actual imagePath -> './food-item/model' + 'images/biryani/Ambur-Chicken-Biryani.jpg'

    this.imagePath = `./food-item/model/${imagePath}`;

  }

}

export {FoodItem}