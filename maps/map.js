// Library & config imports
const axios = require("axios");
const config = require("./config.json");

// Config
const PLACES_API_KEY = config.PLACES_API_KEY;
const LAT = config.LAT;
const LONG = config.LONG;
const CUISINE = config.CUISINE;

const placeData = getPlacesWithCuisine();
console.log(placeData);

function getPlacesWithCuisine() {
  let promise = new Promise((res, rej) => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LAT},${LONG}&radius=5000&type=restaurant&keyword=${CUISINE}&key=${PLACES_API_KEY}`
      )
      .then(function (response) {
        res(response.data).then((data) => {
          return data;
        });
      })
      .catch(function (error) {
        rej("Unable to retrieve restaurants...");
      });
  });
}
