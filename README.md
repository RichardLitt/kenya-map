# kenya-map

![banner](img/nairobi.jpg)

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> This is a map of Kenya, as a test example.

This is a simple map viewer of Donor and GOK funded data in Kenya from 2013-2015.

Time spent: 4 hours.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contribute](#contribute)
- [License](#license)

## Background

This is simply an example repository showing how to use `.geojson` files and how to make a simple, interactive online Map, combined with a chloropleth and marker clustering. Instead of building many things from scratch, I have opted to use libraries as much as possible. These are the main dependencies, taken from the `package.json`:

```
"domready": "^1.0.8",
"jquery": "^3.2.1",
"leaflet": "^1.0.3",
"leaflet.markercluster": "^1.0.5",
"lodash": "^4.17.4"
```

I use domready because it makes the loading a bit easier. jQuery and lodash are two method libraries that just help out - I use lodash mainly for sorting the array at the end, because it's a bit more convenient than rolling my own mapping and sorting function. Leaflet is a nice mapping library; markercluster provides the clustering functionality I needed without too much extra hassle, and saved me doing a lot of filtering of the geojson myself.

```
"brfs": "^1.4.3",
"browserify": "^14.3.0",
"envify": "^4.0.0",
"standard": "^10.0.2",
"watchify": "^3.9.0"
```

For development, I used Browserify because it keeps the js nice and lightweight, and because it allowed me to require all of the javascript into one file, as opposed to fiddling around in the HTML head with lots of different deps. Browserify is pretty extensible, and makes coding, overall, easier and better for the end-user. I used watchify initially to watch files, but got fed up with not remembering how to log errors, and disabled it. If I had more time, I would probably try and fix this more. Envify helped me with my Mapbox token, and brfs helped me stream the local `counties.geojson` folder.

I used standard as a linter, because I like not having to think about what code formatting to use. It saved me time and effort finding errors.

## Install

You will need Node and npm.

```sh
$ git clone RichardLitt/kenya-map
$ npm install
```

Sign up for an account on [Mapbox](http://mapbox.com/), and get a token. Save this locally as `MAPBOX_ACCOUNT_TOKEN` (perhaps in your `~/.bash_profile`), or include it like this when compiling the JavaScript: `MABOX_ACCOUNT_TOKEN={token} node build.js`.

## Usage

Open the `app/index.html` file in your browser.

```sh
$ open app/index.html
```

### Development

The JavaScript files in `src/index.js` are built with [browserify](http://browserify.org/). In the main dir, run `node build.js`.

All css has been brought in to `app/static`.

The data can be found in `data`. Currently, i load the `Distribution...` file and the tileMaps externally. I have included the `counties.geojson` file locally as an example of how this can be done, and because I don't like hitting the GitHub API too much if I don't need to. The source file for this is [here](https://github.com/mikelmaron/kenya-election-data/blob/master/data/counties.geojson). `example.geojson` is just a small example of the `Distribution...` file, as my editor doesn't like huge geojson files.

Note: I currently have watching set off, due to issues with streaming `.geojson` files and the lack of need for fast iterative coding. You can turn it back on again by adding `watchify` as a transform in the `plugin` section of build.js.

Please lint your files before committing. Run `npm run lint`.

## Maintainers

- [@RichardLitt](https://github.com/RichardLitt)

## Contribute

See [the contribute file](contribute.md)!

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

[MIT](LICENSE) © 2017 Richard Littauer
