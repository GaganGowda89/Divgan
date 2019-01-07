//var map = L.map('map').setView([52.30, 8.23], 15);
var map =  L.map('map', {doubleClickZoom: false}).locate({setView: true, maxZoom: 16});

// Basemaps
var topographic=L.esri.basemapLayer("Topographic").addTo(map);

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
       attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
       }).addTo(map);

// var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       maxZoom: 17,
//      attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//     }).addTo(map);

// var OpenStreetMap_DE = L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
// 	maxZoom: 18,
// 	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// });


        var baselayers = {
          "Topographic" : topographic,
          "GoogleEarth" : Esri_WorldImagery
        //  "TopoMap" : OpenTopoMap,
         // "OpenStreetMap": OpenStreetMap_DE
        };

        

// Shapefile control
//L.control.shapefile({ position: 'topleft' }).addTo(map);

L.control.layers(baselayers).addTo(map); 