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
console.log(spotData[3].name)

//listener for when return button is clicked
$('#return').on('click', function() {
  map.flyTo({
    center: initialCenterPoint,
    zoom: initialZoom,
  })
  //clear any info on map
  $('#spotname, #season, #winddirection, #experiencelevel, #waterquality').empty()
})

//listener: when button is clicked
$('.spotButton').on('click', function() {
  // identify what is clicked
  var buttonId = $(this).attr('id')
  // lookup object in the data using array.find()
  var spot = spotData.find(function(currentSpot) {
    // returns the first thing where this resolves to true:
    return currentSpot.id === buttonId
  })
  console.log(spot.name)
  // create varible to center map on choosen location
  var centernow = [spot.lat,spot.lng]

  // Once we have the data element that matches the button press, we use that to populate the elements on the page:
  map.flyTo({
    center: centernow,
    zoom: 15,
 })
  // display spot info above map
  $('#spotname').html(`${spot.name}`)
  $('#season').html(`Kiting Allowed: ${spot.season}`)
  $('#winddirection').html(`Best Wind Direction: ${spot.winddirection}`)
  $('#experiencelevel').html(`Experience Level: ${spot.experiencelevel}`)
  $('#waterquality').html(`Water Quality: ${spot.waterquality}`)
})


// wait for the initial style to Load
map.on('style.load', function() {

  // add a geojson source to the map using our external geojson file
  map.addSource('polys', {
    type: 'geojson',
    data: './data/data.geojson',
  });

  // let's make sure the source got added by logging the current map state to the console
  console.log(map.getStyle().sources);
  // add layer to map
  map.addLayer({
    'id': 'polys',
    'type': 'fill',
    'source': 'polys',
    'layout': {},
    'paint': {},
});
})
