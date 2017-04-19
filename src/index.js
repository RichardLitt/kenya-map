const L = require('leaflet')
const domready = require('domready')

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

domready(function () {
  const mymap = L.map('mapid').setView([0.0236, 37.9062], 13)
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=' + MAPBOX_ACCESS_TOKEN, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 7,
    id: 'mapbox.mapbox-streets-v7',
    accessToken: MAPBOX_ACCESS_TOKEN
  }).addTo(mymap)

  // Test marker
  var marker = L.marker([0.0236, 37.9062]).addTo(mymap)
})
