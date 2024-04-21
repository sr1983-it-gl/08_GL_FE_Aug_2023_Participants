class FoodCategoryView {

  constructor(foodCategory){

    this.foodCategory = foodCategory;
  }

  render(){

    const foodCategoryElement = document.createElement("div");
    foodCategoryElement.setAttribute("class", "list-card")


      const imageElement = document.createElement("img");
      imageElement.src = this.foodCategory.imagePath;

      const anchorElement = document.createElement("a");
      anchorElement.setAttribute("class", "list-name");
      anchorElement.setAttribute("href", `#${this.foodCategory.id}`);
      anchorElement.innerText = this.foodCategory.name;

    foodCategoryElement.appendChild(imageElement);
    foodCategoryElement.appendChild(anchorElement);


    return foodCategoryElement;
  }

  positionCategoryUnderTheRightParent(foodCategoryElement){

    const categoryListParent = document.getElementById("category-list");

    categoryListParent.appendChild(foodCategoryElement);

  }

}

export {FoodCategoryView}