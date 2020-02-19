// this is Wayne's mapboxGL token
mapboxgl.accessToken = 'pk.eyJ1Ijoid2F5bmVwYWNpbGVvIiwiYSI6ImNrNm9jc281YzA4enEza21pdDcybjFybWgifQ.AETmAWEwFz3mIrpMCDGsGQ';

var initialCenterPoint = [-73.913042,40.599552]
var initialZoom = 11

var initOptions = {
  container: 'map-container', // put the map in this container
  style: 'mapbox://styles/mapbox/light-v10', // use this basemap
  center: initialCenterPoint, // initial view center
  zoom: initialZoom, // initial view zoom level (0-18)
}

var map = new mapboxgl.Map(initOptions);

map.addControl(new mapboxgl.NavigationControl());

//assign map markers from dataset
spotData.forEach(function(spotEntry) {
  console.log(spotEntry.name, spotEntry.lat)
  new mapboxgl.Marker()
    .setLngLat([spotEntry.lat, spotEntry.lng])
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(`${spotEntry.name}`))
    .addTo(map);
})
//test pulling from dataset
console.log(spotData[1].name)

//listener: when a button is clicked
$('#return').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom,
  })
  $('#spotname, #season, #winddirection, #experiencelevel, #waterquality').empty()
})
$('#plumb').on('click', function() {
  map.flyTo({
    center: [-73.921148, 40.582803],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[0].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[0].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[0].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[0].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[0].waterquality}`)
})
$('#cross').on('click', function() {
  map.flyTo({
    center: [-73.83319, 40.637661,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[1].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[1].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[1].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[1].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[1].waterquality}`)
})
$('#seagate').on('click', function() {
  map.flyTo({
    center: [-74.005357, 40.581668,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[2].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[2].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[2].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[2].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[2].waterquality}`)
})
$('#breezy').on('click', function() {
  map.flyTo({
    center: [-73.935202, 40.557232,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[3].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[3].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[3].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[3].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[3].waterquality}`)
})
$('#rockaway').on('click', function() {
  map.flyTo({
    center: [-73.81275, 40.583252,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[4].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[4].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[4].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[4].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[4].waterquality}`)
})
$('#coney').on('click', function() {
  map.flyTo({
    center: [-73.997819, 40.570529,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[5].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[5].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[5].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[5].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[5].waterquality}`)
})
$('#floyd').on('click', function() {
  map.flyTo({
    center: [-73.883144, 40.604449,],
    zoom: 15
  })
  // display spot info above map
  $('#spotname').html(`${spotData[6].name}`)
  $('#season').html(`Kiting Allowed: ${spotData[6].season}`)
  $('#winddirection').html(`Best Wind Direction: ${spotData[6].winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spotData[6].experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spotData[6].waterquality}`)
})
