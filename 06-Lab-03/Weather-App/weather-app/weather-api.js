
// Declare const for MEtric
// Declare const for API_KEY

const API_KEY = "e1c66d0842a89387b93fcef8c1c6c002";
const UNITS_METRIC = "metric";

const WEATHER_API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Declare const for 'Base_URL'
// 

class WeatherAPI {

  constructURL(locationName){

    this.weatherURL = new URL(WEATHER_API_BASE_URL);

    this.weatherURL.searchParams.append("q", locationName);
    this.weatherURL.searchParams.append("appid", API_KEY);
    this.weatherURL.searchParams.append("units", UNITS_METRIC);

    return this.weatherURL.toString();
  }

  // ConstructURL(locationName)

    // url = new URL(base_url)

    // url.searchParams.append("q", "Delhi");


    // return URL-as string
    // url.toString()


  async invokeWeatherURL(){

    const responseObj = await fetch(this.weatherURL.toString())

    const weatherResponseJSON = await responseObj.json();

    return weatherResponseJSON;

  }

  // invokeURL()
    // result -> await  fetch()
    // result.json()
    // print(json)


}

export {WeatherAPI}