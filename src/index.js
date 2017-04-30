const L = require('leaflet')
require('leaflet.markercluster')
const domready = require('domready')
const $ = require('jquery')
const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

domready(function () {
  // Kenya map
  const mymap = L.map('mapid').setView([0.0236, 37.9062], 7)
  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=' + MAPBOX_ACCESS_TOKEN, {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    id: 'mapbox.mapbox-streets-v7',
    accessToken: MAPBOX_ACCESS_TOKEN
  }).addTo(mymap)

  // Markers and Counties
  const geojsonURL = 'https://opendata.arcgis.com/datasets/73579b946adb446186e29702276aa77a_0.geojson'

  // From example tutorial, http://leafletjs.com/examples/choropleth/
  function getColor (d) {
    return d > 130 ? '#800026'
       : d > 110 ? '#BD0026'
       : d > 90 ? '#E31A1C'
       : d > 70 ? '#FC4E2A'
       : d > 50 ? '#FD8D3C'
       : d > 30 ? '#FEB24C'
       : d > 10 ? '#FED976'
       : '#FFEDA0'
  }
  function style (feature) {
    return {
      fillColor: getColor(feature.markerCounter),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    }
  }

  $.getJSON(geojsonURL, function (features) {
    const markers = L.markerClusterGroup()
    var counties = fs.readFileSync(path.join(__dirname, '..', 'data', 'counties.geojson'))
    counties = JSON.parse(counties.toString())
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
        // Find the county in the county list
        var county = _.find(counties.features, (county) => {
          return feature.properties.county === county.properties.COUNTY_NAM
        })
        // Add a marker counter to it, or add to the counter. If no match, ignore.
        if (county) {
          county.markerCounter = (county.markerCounter) ? county.markerCounter + 1 : 1
        }
        markers.addLayer(layer.bindPopup(content))
      }
    })
    markers.addTo(mymap)
    L.geoJson(counties, {style: style}).addTo(mymap)
  })
})
