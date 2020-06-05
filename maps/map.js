// Library & config imports
const axios = require("axios");
const { DataStore } = require("@aws-amplify/datastore");
const config = require("./config.json");
const { Restaurant, Room } = require("../src/models");

// Config
const PLACES_API_KEY = config.PLACES_API_KEY;
getConfig();

async function getConfig() {
  let LAT = await DataStore.query(Room.lat);
  LAT = LAT.toString();
  let LONG = await DataStore.query(Room.long);
  LONG = LONG.toString();
  const CUISINE = await DataStore.query(Room.cuisine);
}

let url = "";

if (CUISINE == "None")
  url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LAT},${LONG}&radius=5000&type=restaurant&key=${PLACES_API_KEY}`;
else
  url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LAT},${LONG}&radius=5000&type=restaurant&keyword=${CUISINE}&key=${PLACES_API_KEY}`;

axios.get(url).then((response) => {
  let length = response.data.results.length;
  for (let i = 0; i < length; i++) {
    let restaurantId = response.data.results[i].id;
    let restaurantName = response.data.results[i].name;
    let restaurantRating = response.data.results[i].rating;
    let restaurantPhotoRef = response.data.results[i].photos[0].photo_reference;
    let restaurantPhoto = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${restaurantPhotoRef}&key=${PLACES_API_KEY}`;
    data = {
      id: restaurantId,
      name: restaurantName,
      rating: restaurantRating,
      photo: restaurantPhoto,
    };
    pushData(data);
  }
});

async function pushData(data) {
  await DataStore.save(
    new Restaurant({
      id: data.id,
      name: data.name,
      rating: data.rating,
      photo: data.photo,
    })
  );
}
