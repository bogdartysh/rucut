function showGeoJSONData (map) {
    // Create GeoJSON reader which will download the specified file.
    // Shape of the file was obtained by using HERE Geocoder API.
    // It is possible to customize look and feel of the objects.
    var reader = new H.data.geojson.Reader('data/kazan-110322.json', {
        // This function is called each time parser detects a new map object
        style: function (mapObject) {
            // Parsed geo objects could be styled using setStyle method
            if (mapObject instanceof H.map.Polygon) {
                mapObject.setStyle({
                    fillColor: 'rgba(255, 0, 0, 0.5)',
                    strokeColor: 'rgba(0, 0, 255, 0.2)',
                    lineWidth: 3
                });
            }
        }
    });

    // Start parsing the file
    reader.parse();

    // Add layer which shows GeoJSON data on the map
    map.addLayer(reader.getLayer());
}

/**
 * Boilerplate map initialization code starts below:
 */
// Step 1: initialize communication with the platform
var apikey = 'QpPJaRPEFIwfXOpsTU4h1qpXf7H2UzbyhOkG6rIIPVE';
var platform = new H.service.Platform({
    apikey: 'QpPJaRPEFIwfXOpsTU4h1qpXf7H2UzbyhOkG6rIIPVE'
});
var defaultLayers = platform.createDefaultLayers();

// Step 2: initialize a map
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
    center: {lat: 55.47, lng: 49.06},
    pixelRatio: window.devicePixelRatio || 1
});
// add a resize listener to make sure that the map occupies the whole container
window.addEventListener('resize', () => map.getViewPort().resize());


// Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

showGeoJSONData(map);
