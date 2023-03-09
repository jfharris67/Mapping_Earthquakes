// Add console.log to check to see if our code is working.
console.log("working");
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([44.0, -80.0], 2);
// We create the tile layer that will be the background of our map.
let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// then we add our 'streets' tile layer to the map.
light.addTo(map);
// Accessing the Toronto airline routes GeoJSON URL.
let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";
// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data).addTo(map);
});
