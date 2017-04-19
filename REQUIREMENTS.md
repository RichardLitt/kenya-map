# Coding Challenge 

The aim of this coding challenge is to see how you work, how you communicate and assess the quality of your code. We'd expect the task to take 3-5 hrs to complete.

## Task

Build a map, using [data on donor and government funded projects in Kenya](http://www.opendata.go.ke/datasets/distribution-of-donor-and-gok-funded-projects-2013-to-2015) (Download as [GeoJSON](https://opendata.arcgis.com/datasets/73579b946adb446186e29702276aa77a_0.geojson) or [CSV](https://opendata.arcgis.com/datasets/73579b946adb446186e29702276aa77a_0.csv). Note: the JSON is usable, but the CSV may be easier to understand).

_[Leaflet](http://leafletjs.com/) or [MapboxJS](https://www.mapbox.com/mapbox.js/api/) are a good libraries to start with if you're not familiar with building web maps_

### Requirements

1. Create a web based map based on the dataset above with simple markers for each project on a map
	* Clicking on a marker should show project title, description and objectives (ie. in a popup or sidebar to the map)

2. Add an option to cluster markers on the map (ie. markers close together are grouped into a single marker)

3. Load the Kenyan [county boundaries](https://github.com/mikelmaron/kenya-election-data/blob/master/data/counties.geojson) and shade areas based on the number of projects in each county (aka build a choropleth)
	* You can use the `county` property of the data to join the counties to the projects

### Bonus points

- Add UI for filtering the projects based on other properties
- Clean up / optimize the source data for faster load times
- Repeat step 3 but shade areas by average project cost in that county 
- Suggest a novel way to visualize the data (and implement if you have time)

## Guidelines
* The aim of this coding challenge is to see how you work, how you communicate and the quality of your code
* If you're not sure about something, ask questions. We'd never ask you to build something with "and don't ask questions!", so it would be silly to do that with this exercise. If you come up with any questions (technical or non-technical) at any point in the exercise please feel free to ask.
* Each step should leave you with working code
	* Aim for working code first, then move to the next step
	* Make sure you commit at each step so you have something to show if you run out of time
* Upload your code to a github repository and email us the link, and an estimate of how much time you spent building it.
* Use existing libraries as necessary
* Include a README in your repository with a brief explanation of
	* What the code does
	* How to install/run it (ie. run `bower install` then load in a browser)
	* Why you took the approach you did
	* Credit any libraries or other code you've used (ie. stackoverflow examples etc)
* If you're language of choice isn't JS, and you think you could build this quicker/better in python, C#, ruby or something else.. do that.