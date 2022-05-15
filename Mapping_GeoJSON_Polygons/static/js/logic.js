// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    //pointToLayer: function(feature, latlng) {       
    //   console.log(feature);
    //   return L.marker(latlng)
//add bindPopup feature
    //   .bindPopup("<h2>" + feature.properties.city + "</h2>");
 
       // add name of airport, city, and country

// L.geoJSON(sanFranAirport, {       
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
//         layer.bindPopup("<h2>" + feature.properties.name + "</h2><hr><h2>" +
//          feature.properties.city + ", " + feature.properties.country +"</h2>");
//     }       
//   }).addTo(map);  

// Create the map object with center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our tile layer to the map.
// streets.addTo(map);

// // We create the light navigation tile layer that will be the background of our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-day-v4/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });
// // We create the dark navigation tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-preview-night-v3/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
// let baseMaps = {
//     Light: light,
//     Dark: dark
//   };
  
//Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite Streets": satelliteStreets
  };

 // Create the map object with Toronto center, zoom level and default layer.
let map = L.map('mapid', {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satelliteStreets]
})

let myStyle = {
    color: "#0221cf",
    weight: 1,
    fillcolor: "#adaa63",
    fillopacity: 0.8
    
}

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/lrtipple/Mapping_Earthquakes/main/torontoNeighborhoods.json";

//accessing the airport data
// let airportdata = "https://raw.githubusercontent.com/lrtipple/Mapping_Earthquakes/main/majorAirports.json"

// // Grabbing our GeoJSON data.
// d3.json(airportdata).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// });

// accessing the toronta direct flight routes
// let torontoData = "https://raw.githubusercontent.com/lrtipple/Mapping_Earthquakes/main/torontoRoutes.json"

// // Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }


// Grabbing our GeoJSON data for Toronto direct flights.
// d3.json(torontoData).then(function(data) {
//     console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
//   L.geoJSON(data).addTo(map);
// creating GeoJSON layer with dark map, nonstop fligh routes, in light yellow with a weight of 2
// L.geoJSON(data, {
//     style: myStyle,
//     color: "#ffffa1",
//     weight: 2,
//     onEachFeature: function(feature, layer) {
//         layer.bindPopup("<h3>Airline: " + feature.properties.airline + "</h3><hr><h3> Destination:" 
//         + feature.properties.dst + "<.h3>");

//     }
// })
// .addTo(map);
// grabbing geoJSON data for toronto hoods
d3.json(torontoHoods).then(function(data) {
    console.log(data);
   L.geoJSON(data).addTo(map);
});


