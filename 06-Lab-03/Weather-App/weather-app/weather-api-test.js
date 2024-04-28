
import {WeatherAPI} from "./weather-api.js"

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();

  const weatherAPIURL = weatherAPIObj.constructURL("France");

  console.log(weatherAPIURL);

}

testConstructURL();