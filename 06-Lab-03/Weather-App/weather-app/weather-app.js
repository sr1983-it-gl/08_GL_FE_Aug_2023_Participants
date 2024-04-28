    // Add Listener

    // Get Reference to text-field
    // add listener - 'key-press'

      // if (event.key == "Enter" ){

            // handle
            // console.log("Enter Key")

          // }

class WeatherAppIntegration {

  init(){

    const searchBoxElement = document.querySelector(".search-box")

    searchBoxElement.addEventListener("keypress", this.handleUserEvent);
  }

  handleUserEvent(event){

    if (event.key == "Enter"){

      const userSuppliedLocation = event.target.value;
      console.log("Enter Key pressed -> " + userSuppliedLocation)
    }else{

      // L, O, N
      console.log("Key Press -> " + event.key);
      
    }
  }
    

}

export {WeatherAppIntegration}

