const L = require('leaflet')
const domready = require('domready')
const $ = require('jquery')
const cluster = require('leaflet.markercluster')

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

domready(function () {
  // Kenya map
  const mymap = L.map('mapid').setView([0.0236, 37.9062], 7)
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=' + MAPBOX_ACCESS_TOKEN, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.mapbox-streets-v7',
    accessToken: MAPBOX_ACCESS_TOKEN
  }).addTo(mymap)

  // Markers
  const geojsonURL = 'https://opendata.arcgis.com/datasets/73579b946adb446186e29702276aa77a_0.geojson'

  $.getJSON(geojsonURL, function (features) {
    var markers = L.markerClusterGroup()
    L.geoJson(features, {
      onEachFeature: function (feature, layer) {
        var content
        if (!feature.properties.project_title) {
          content = `Unknown.

          Project ID: ${feature.properties.projectid}`
        } else {
          content = `
          <h2>${feature.properties.project_title}</h2>
          <p>${feature.properties.project_description}</p>
          <hr />
          <h3>Objectives:</h3>
          <p>${feature.properties.project_objectives}</p>`
        }
        markers.addLayer(layer.bindPopup(content))
      }
    })
    markers.addTo(mymap)
  })

  // Counties
  var fs = require('fs')
  var path = require('path')
  var counties = fs.readFileSync(path.join(__dirname, '..', 'data', 'counties.geojson'))
  L.geoJson(JSON.parse(counties.toString())).addTo(mymap)
})
