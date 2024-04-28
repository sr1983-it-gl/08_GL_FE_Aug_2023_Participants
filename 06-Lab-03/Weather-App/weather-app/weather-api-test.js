
import {WeatherAPI} from "./weather-api.js"

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();

  const weatherAPIURL = weatherAPIObj.constructURL("France");

  console.log(weatherAPIURL);

}

async function testInvokeURL(){

  const weatherAPIObj = new WeatherAPI();

  const weatherURL = weatherAPIObj.constructURL("France");
  console.log(weatherURL);

  const weatherJSON = await weatherAPIObj.invokeWeatherURL();

  console.log(weatherJSON);

  // call invokeURL()
  // print(json_response)
}

// testConstructURL();

testInvokeURL();