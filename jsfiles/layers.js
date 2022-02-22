var geojson;

/* This JS file contains the script for addition of basemaps, overlay maps, and the layer panel control */

/* Addition of basemap */
var map = L.map('map', {
  center: [13.599512,121.984222],
  zoom: 6,
});

/* Addition of mouse cursor position lon lat indicator */
/*L.control.mousePosition({
  position: 'bottomright'
}).addTo(map);*/

/* Addition of graphic scale to map */
var graphicScale = L.control.graphicScale({
  fill: 'fill',
  doubleLine: true,
  position: 'bottomright',
  minUnitWidth: 50
}).addTo(map);

/* Addition of North Arrow */
var north = L.control({position: "bottomright"});
north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend");
    div.innerHTML = '<img src="images/round-compass.png">';
    return div;
}
north.addTo(map);

var ESRI = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: 18,
  attribution: '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Google = L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga', {
  maxZoom: 18,
  attribution: '© Google <a href="https://developers.google.com/maps/terms">Terms of Use</a>'
}).addTo(map);

var Namria = L.tileLayer('http://basemapserver.geoportal.gov.ph/tiles/v2/PGP/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© <a href="https:/www.geoportal.gov.ph">Geoportal Philippines</a>'
}).addTo(map);

// var Hydda_Full = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
//   maxZoom: 18,
//   attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

/* More available basemaps */
var esriWorldImagery = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', 
{
  maxZoom: 19,
  minZoom: 2,
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

// var EsriNatGeo = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
//   attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
//   maxZoom: 19
// });

var esriWorldStreet =  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
  maxZoom: 19
});

/* Addition of Minimap */
/* Uncomment if needed */
// var mini = new L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', 
// {
//   maxZoom: 17,
//   minZoom: 4
// });
// var miniMap = new L.Control.MiniMap(mini, { toggleDisplay: true, height: 200, width: 200 }).addTo(map);
/* End of of uncomment */

/* Addition of sidebar */
var sidebar = L.control.sidebar('sidebar').addTo(map);

/* Addition of Overlays */
/* See http://leafletjs.com/examples/geojson/ for documentation */

/* Corals and Mangroves Layers */
/*var corals = new L.LayerGroup();
var mangroves = new L.LayerGroup();
var coralLayer;
var mangroveLayer;

$.getJSON("geojson/corals/coralPersistent.geojson", function(data){
  coralLayer = L.geoJson(data, {
      style: coralstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNICITY;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(corals);
});*/

/* Persistent Mangroves in Sites */
/*$.getJSON("geojson/mangroves/mangrovePersistent.geojson", function(data){
  mangroveLayer = L.geoJson(data, {
      style: mangrovestyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNICITY;
            document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
    }).addTo(mangroves);
});*/

/* NIPAS SITES Overlay */
var arras = new L.LayerGroup();
$.getJSON("geojson/arras/arras.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: PAStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          /* Show in popup nipas boundary name when hovering over a feature */
          click: function (e) {
           
            checkARRASSite(feature.properties.MUNICITY);

            var popup = L.popup()
              .setLatLng(e.latlng)
              //.setContent("<table class='popup-table' id='dvTable' align='center' style='border-collapse:collapse;width:100%;'></table>")
              .setContent(
            "<h5 class='popup-content'><center><strong>Province:</strong> "+feature.properties.PROVINCE+"</center></h5>"
            + "<h5 class='popup-content'><center><strong>Municipality/City:</strong> "+feature.properties.MUNICITY+"</center></h5>"
            + "<table id='dvTable' class='popup-arras' align='center'>"
            + "<tr>"
            + "<th class='popup-arras'>Date</th>"
            + "<th class='popup-arras'>Classification Data</th>"
            + "<th class='popup-arras'>Habitat Data</th>"
            + "</tr>"
            + "</table>")
              .openOn(map);
          
          }
        });
      }
    }).addTo(arras);
});

/* Philippine Boundaries */
var maritime = new L.LayerGroup();
var PA = new L.LayerGroup();          /* Protected Areas */
var regions = new L.LayerGroup();
var province = new L.LayerGroup();
var municity = new L.LayerGroup();
var MW = new L.LayerGroup();            /* Municipal Waters */

/* Maritime Boundaries Overlay */
$.getJSON("geojson/boundaries/maritime.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: maritimeStyle,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer) {
      layer.on({
        /* Show in popup maritime boundary name when hovering over a feature */
        mouseover: function (e) {
          var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.DATA_NAME + "</strong></center></h5>")
            .openOn(map);
        }
      });
    }
  }).addTo(maritime);
});

/* Marine Protected Areas Boundaries */
$.getJSON("geojson/boundaries/PA.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: PAStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e) {
            var area = parseFloat(feature.properties.HECTARES).toLocaleString() + " ha";
            if(feature.properties.HECTARES == null) {
              var area = "No data";
            }
            /* Show in popup region name when clicking a feature */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.PANAME + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'><tr>"
                            + "<td class='ind-popup'>Area</td>"
                            + "<td class='ind-popup'><strong>" + area + "</strong></td>"
                          + "</tr></table>")
              .openOn(map);
          }      
        });
      }
    }).addTo(PA);
});

/* Regional Boundary Overlay */
$.getJSON("geojson/boundaries/regions.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: RPMStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e) {
            if(selected){     /* Check if there is a higlighted feature */
              geojson.resetStyle(selected);   /* If true, reset the style of the formerly selected feature */
            }
            if (choroplethLayer) {    /* Check if there is a choropleth overlay */
              map.removeLayer(choroplethLayer);   /* If true, remove the choropleth overlay */
            }
            removeSocioInfo();    /* Remove the information from the sidebar after clicking a province (removeOverlays.js) */
            select(e);      /* Highlight the new selected feature */
            
            /* Show in popup region name when clicking a feature */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.REGION + "</strong></center></h5>")
              .openOn(map);
          }      
        });
      }
    }).addTo(regions);
});

/* Provincial Boundary Overlay */
$.getJSON("geojson/boundaries/provinces.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: RPMStyle,    /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e) {
            if(selected){     /* Check if there is a higlighted feature */
              geojson.resetStyle(selected);   /* If true, reset the style of the formerly selected feature */
            }
            if (choroplethLayer) {    /* Check if there is a choropleth overlay */
              map.removeLayer(choroplethLayer);   /* If true, remove the choropleth overlay */
            }
            removeSocioInfo();    /* Remove the information from the sidebar after clicking a province (removeOverlays.js) */
            select(e);      /* Highlight the new selected feature */
            /* Show in popup province name when clicking a feature */
            var popup = L.popup()
                .setLatLng(e.latlng)
                .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.PROV + "</strong></center></h5>")
                .openOn(map);
            checkProvinceSite(feature.properties.PSGC_PROV);    /* Go to checkIfSite.js */
          }
        });
      }
    }).addTo(province);
});

/* Municipal Boundary Overlay */
$.getJSON("geojson/boundaries/municity.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: RPMStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            if(selected){       /* Check if there is a higlighted feature */
              geojson.resetStyle(selected);   /* If true, reset the style of the formerly selected feature */
            }
            if (choroplethLayer) {    /* Check if there is a choropleth overlay */
              map.removeLayer(choroplethLayer);   /* If true, remove the choropleth overlay */
            }
            removeSocioInfo();    /* Remove the information from the sidebar after clicking a municity (removeSocioInfo.js) */
            select(e);     /* Highlight the new selected feature */
            /* Show in popup municity name and province name when clicking a feature */
            var popup = L.popup()
                .setLatLng(e.latlng)
                .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
                            + "<table class='popup-table' align='center'><tr>"
                            + "<td class='popup-info'>" + feature.properties.PROV + "</td>"
                            + "</tr></table")
                .openOn(map);
            checkMunicitySite(feature.properties.PSGC_MUNI);      /* Go to checkIfSite.js */
            
          }
        });
      }
    }).addTo(municity);
});

/* Municipal Waters Boundary Overlay */
/* Add municipal waters polygon to the municipal water polyline */
$.getJSON("geojson/boundaries/muniwater_polygon.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: mwPoly,    /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer) {
      layer.on({
//          Show municipal water name when clicking the polygon 
        click: function (e) {
          var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.MUNICITY + "</strong></center></h5>")
            .openOn(map);
        }
      });
    }
  }).addTo(MW);
  $.getJSON("geojson/boundaries/muniwater_national.geojson", function(data){
    var geojson = L.geoJson(data, {
      style: mwstyle    /* Set the style of the overlay (jsonStyles.js) */
    }).addTo(MW);
  });
});


/* Physical Stressors */
/* Sediment Plume */
var sedimentplume = new L.LayerGroup();
var sedPlumeLayer;
/* Year 1 Sediment Plume */
$.getJSON("geojson/stressors/sedPlume/sedPlumeY1.geojson", function(data){
  sedPlumeYear1 = L.geoJson(data, {
    style: sedPlumeStyle,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            deleteSedPlumeInfo();
            /* Show sediment plume information on sidebar */
            document.getElementById("plume-region").innerHTML = feature.properties.REGION;
            document.getElementById("plume-province").innerHTML = feature.properties.PROV;
            document.getElementById("plume-lsdate").innerHTML = feature.properties.LS_DATE;
            document.getElementById("plume-event").innerHTML = feature.properties.STORM_EVEN;
            document.getElementById("plume-period").innerHTML = feature.properties.PERIOD;
            /* Make sediment plume tab active after clicking on sediment plume feature */
            $(document).ready(function() {
              $('#stressors2').removeClass('active');
              $('#infotab-stormtrack').removeClass('in active');
              $('#stressors1').addClass('active');
              $('#infotab-sedimentplume').addClass('in active');
            });
            
            sedimentStorm(feature.properties.PROV, feature.properties.PERIOD);
            sidebar.open('stressors');
          }
      });
    }
  }).addTo(sedimentplume);
});

/* Storm Tracks */
// var storm = new L.LayerGroup();
// var stormLayer;
/* Year 1 Storm Tracks */
// $.getJSON("geojson/stressors/storm/stormLinesY1.geojson", function(data) {
//   var geojson = L.geoJson(data, {
//     style: stormStyle,
//     onEachFeature: function (feature, layer) {
//       layer.on({
//         click: function (e) {
          /* Show storm track line information as popup */
  //         var popup = L.popup()
  //           .setLatLng(e.latlng)
  //           .setContent("<h5 class='popup-header'><center><strong>Storm Track Line</strong></center></h5>"
  //                         + "<table class='popup-table' align='center'><tr>"
  //                           + "<td class='ind-popup'>Region</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.REGION + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Province</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.PROV + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Period</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.PERIOD + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Year</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.YEAR + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Start Date</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.START_DATE + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>End Date</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.END_DATE + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Local Name</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.LOC_NAME + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>International Name</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.INTL_NAME + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Nature</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.NATURE + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Minimum Pressure</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.MIN_PRES + "</strong></td>"
  //                         + "</tr>"
  //                         + "<tr><td class='ind-popup'>Maximum Wind</td>"
  //                           + "<td class='ind-popup'><strong>" + feature.properties.MAX_WIND + "</strong></td>"
  //                         + "</tr></table>")
  //         .openOn(map);
  //       }
  //     });
  //   }
  // }).addTo(storm);
  // $.getJSON("geojson/stressors/storm/stormPointsY1.geojson", function(data){
  //   stormLayer = L.geoJson(data, {
  //     pointToLayer: function (feature, latlng) {
  //       return L.circleMarker(latlng, stormMarker(feature));
  //     },
  //     onEachFeature: function (feature, layer) {
  //       layer.on({
          /* Show in storm points info after clicking on a storm marker */
          // click: function (e) {
            // stormPointsInfo(feature.properties.LOC_NAME);
            // document.getElementById("storm-region").innerHTML = feature.properties.REGION;
            // document.getElementById("storm-province").innerHTML = feature.properties.PROV;
            // document.getElementById("storm-period").innerHTML = feature.properties.PERIOD;
            // document.getElementById("storm-year").innerHTML = feature.properties.YEAR;
            // document.getElementById("storm-datetime").innerHTML = feature.properties.YYYYMMDDHH;
            // document.getElementById("storm-locname").innerHTML = feature.properties.LOC_NAME;
            // document.getElementById("storm-intlname").innerHTML = feature.properties.INTL_NAME;
            // document.getElementById("storm-nature").innerHTML = feature.properties.NATURE;
            /* Check if no data */
//             if(feature.properties.JMA_WIND == -999) {
//               document.getElementById("storm-wind").innerHTML = "No data";
//             }
//             else {
//               document.getElementById("storm-wind").innerHTML = feature.properties.JMA_WIND;
//             }
//             if(feature.properties.JMA_PRES == -999) {
//               document.getElementById("storm-press").innerHTML = "No data";
//             }
//             else {
//               document.getElementById("storm-press").innerHTML = feature.properties.JMA_PRES;
//             }
//             $(document).ready(function() {
//               $('#stressors1').removeClass('active');
//               $('#infotab-sedimentplume').removeClass('in active');
//               $('#stressors2').addClass('active');
//               $('#infotab-stormtrack').addClass('in active');
//             });
//             sidebar.open('stressors');
//           } 
//         });
//       }
//     }).addTo(storm);
//   });
// });


// var stormRad = new L.LayerGroup();
// $.getJSON("geojson/stressors/storm/stormRadiiY1.geojson", function(data){
//   var geojson = L.geoJson(data, {
//     style: stormRadiiStyle,   /* Set the style of the overlay (jsonStyles.js) */
//     onEachFeature: function (feature, layer) {
//       layer.on({
//         /* Show in popup maritime boundary name when hovering over a feature */
//         click: function (e) {
//           var popup = L.popup()
//             .setLatLng(e.latlng)
//             .setContent("<h5 class='popup-header'><center><strong>Storm Track Line</strong></center></h5>"
//                           + "<table class='popup-table' align='center'><tr>"
//                             + "<td class='ind-popup'>Region</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.REGION + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Province</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.PROV + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Period</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.PERIOD + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Year</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.YEAR + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Local Name</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.LOC_NAME + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>International Name</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.INTL_NAME + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Nature</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.NATURE + "</strong></td>"
//                           + "</tr>"
//                           + "<tr><td class='ind-popup'>Radius</td>"
//                             + "<td class='ind-popup'><strong>" + feature.properties.RAD_30KT + "</strong></td>"
//                           + "</tr></table>")
//             .openOn(map);

//         }
//       });
//     }
//   }).addTo(stormRad);
// });

/* Anomalies */
var ssta = new L.LayerGroup();
var para = new L.LayerGroup();
var wsa = new L.LayerGroup();

/* Sea Seurface Temperature Anomaly */
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1988 SSTA: <center><strong>" + feature.properties.SSTA_88 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta);
});

/* Photosynthetically Active Radiation Anomaly */
$.getJSON("geojson/stressors/PARA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: PARAStyle,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show PARA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1998 PARA: <center><strong>" + feature.properties.PARA_98 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(para);
});

/* Wind Speed Anomaly */
$.getJSON("geojson/stressors/WSA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: WSAStyle,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show WSA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1998 WSA: <center><strong>" + feature.properties.WSA_98 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(wsa);
});

/* Sites Overlays */
var provS = new L.LayerGroup();
var munCi = new L.LayerGroup();

/* Province Sites */
$.getJSON("geojson/site/provinceSite.geojson", function(data){
  var geojson = L.geoJson(data, {
      style: siteStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            if(selected){       /* Check if there is a higlighted feature */
              geojson.resetStyle(selected);      /* If true, reset the style of the formerly selected feature */
            }
            if (choroplethLayer) {    /* Check if there is a choropleth overlay */
              map.removeLayer(choroplethLayer);   /* If true, remove the choropleth overlay */
            }
            removeSocioInfo();        /* Remove the information from the sidebar after clicking a province (removeSocioInfo.js) */
            select(e);     /* Highlight the new selected feature */
            checkProvinceSite(feature.properties.PSGC_PRO_1);    /* Go to checkProvinceSite.js */
          }
        });
      }
    }).addTo(provS);
});


/* Municipality Sites */
$.getJSON("geojson/site/muniCitySite.geojson", function(data){
  var geojson = L.geoJson(data, {
      style: siteStyle,     /* Set the style of the overlay (jsonStyles.js) */
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            if (selected){       /* Check if there is a higlighted feature */
              geojson.resetStyle(selected);   /* If true, reset the style of the formerly selected feature */
            }
            if (choroplethLayer) {    /* Check if there is a choropleth overlay */
              map.removeLayer(choroplethLayer);   /* If true, remove the choropleth overlay */
            }
            removeSocioInfo();        /* Remove the information from the sidebar after clicking a province (removeSocioInfo.js) */
            select(e);       /* Highlight the new selected feature */
            checkMunicitySite(feature.properties.PSGC_MUNI);      /* Go to checkMunicitySite.js */
          }
        });
      }
    }).addTo(munCi);
});



/* Industries in the Philippines that could affect coral and mangrove habitats (?) */
var petroleum = new L.LayerGroup();
var geothermal = new L.LayerGroup();
var mining = new L.LayerGroup();
var coal = new L.LayerGroup();
/* Ports (Regional and Municipal) */
var regPorts = new L.LayerGroup();
var munPorts = new L.LayerGroup();

/* Petrolem Contracts */
$.getJSON("geojson/industries/petroleum.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: petrolStyle,       /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
        click: function (e) {
          document.getElementById('industry-heading').innerHTML = "";
          var heading = document.createTextNode("Petroleum Contract");
          document.getElementById('industry-heading').appendChild(heading);
          petroleumData(feature.properties.NO);      /* Go to industriesdData.js */
          /* Show in popup company name and area when clicking a feature */
          var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.OPERATOR + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'><tr>"
                            + "<td class='ind-popup'>Area</td>"
                            + "<td class='ind-popup'><strong>" + parseFloat(feature.properties.AREA).toLocaleString() + " ha</strong></td>"
                          + "</tr></table")
            .openOn(map);
        }      
      });
    }
  }).addTo(petroleum);
});

/* Geothermal Contracts */
$.getJSON("geojson/industries/geothermal.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: geothermalStyle,       /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
        click: function (e) {
          document.getElementById('industry-heading').innerHTML = "";
          var heading = document.createTextNode("Geothermal Contract");
          document.getElementById('industry-heading').appendChild(heading);
          geothermalData(feature.properties.NO);      /* Go to industriesData.js */
          /* Show in popup company name and area when clicking a feature */
          var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.COMPANY + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'><tr>"
                            + "<td class='ind-popup'>Area</td>"
                            + "<td class='ind-popup'><strong>" + parseFloat(feature.properties.AREA).toLocaleString() + " ha</strong></td>"
                          + "</tr>"
                          + "<tr><td class='ind-popup'>Project</td>"
                            + "<td class='ind-popup'><strong>" + feature.properties.PROJECT + "</strong></td>"
                          + "</tr></table")
            .openOn(map);
        }      
      });
    }
  }).addTo(geothermal);
});

/* Coal Contracts */
$.getJSON("geojson/industries/coal.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: coalStyle,       /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
        click: function (e) {
          document.getElementById('industry-heading').innerHTML = "";
          var heading = document.createTextNode("Coal Contract");
          document.getElementById('industry-heading').appendChild(heading);
          coalData(feature.properties.NO);      /* Go to industriesData.js */
          /* Show in popup company name and area when clicking a feature */
          var popup = L.popup()
            .setLatLng(e.latlng)
            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.CONTRACTOR + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'>"
                          + "<tr><td class='ind-popup'>Location</td>"
                            + "<td class='ind-popup'><strong>" + feature.properties.LOCATION + "</strong></td>"
                          + "</tr></table")
            .openOn(map);
        }      
      });
    }
  }).addTo(coal);
});

/* New Mining Agreement geojson */
$.getJSON("geojson/industries/mining.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: miningStyle,       /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
        click: function (e) {
          document.getElementById('industry-heading').innerHTML = "";
          var heading = document.createTextNode("Mining Agreement");
          document.getElementById('industry-heading').appendChild(heading);
          miningData(feature.properties.MTN);      /* Go to industriesData.js */
          var area = parseFloat(feature.properties.AREA).toLocaleString() + " ha";
          if(feature.properties.AREA == null) {
            var area = "No data";
          }
          var commodity = feature.properties.COMMODITY;
          if(feature.properties.COMMODITY == null) {
            var commodity = "No data";
          }
          /* Show in popup holder name and area when clicking a feature */
          var popup = L.popup()
          .setLatLng(e.latlng)
          .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.HOLDER + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'><tr>"
                            + "<td class='ind-popup'>Area</td>"
                            + "<td class='ind-popup'><strong>" + area + "</strong></td>"
                          + "</tr>"
                          + "<tr><td class='ind-popup'>Type</td>"
                            + "<td class='ind-popup'><strong>" + feature.properties.MTN_TYPE + "</strong></td>"
                          + "</tr>"
                          + "<tr><td class='ind-popup'>Commodities</td>"
                            + "<td class='ind-popup'><strong>" + commodity + "</strong></td>"
                          + "</tr></table")
          .openOn(map);
        }      
      });
    }
  }).addTo(mining);
});

/* Regional Fish Ports Overlay */
$.getJSON("geojson/industries/regFish.geojson", function(data) {
  var geojson = L.geoJson(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, circleMarker);
    },
    onEachFeature: function (feature, layer) {
      layer.on({
        click: function (e) {
          var popup = L.popup()
          .setLatLng(e.latlng)
          .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
                          + "<table class='popup-table' align='center'><tr>"
                            + "<td class='ind-popup'>Province</td>"
                            + "<td class='ind-popup'><strong>" + feature.properties.PROV_NAME + "</strong></td>"
                          + "</tr><tr>"
                            + "<td class='ind-popup'>2017 Fish Unloading</td>"
                            + "<td class='ind-popup'><strong>" + parseFloat(feature.properties.CY_2017).toLocaleString() + " tons</strong></td>"
                          + "</tr></table")
          .openOn(map);
        }
      });
    }
  }).addTo(regPorts);
});


/* Municipal Ports overlays */
/* Uses Leaflet marker cluster plugin to group markers */
/* See https://github.com/Leaflet/Leaflet.markercluster and https://github.com/ghybs/Leaflet.FeatureGroup.SubGroup 
   for documentation and usage */
var mcg = L.markerClusterGroup().addTo(map);
var munPortsSub = L.featureGroup.subGroup(mcg);

munPorts = L.geoJson(false, {
  pointToLayer: function (feature, latlng) {
    /* Show in popup the location of the municipal fish port */
    var popup = L.popup()
      .setContent('<h5 class="popup-header">' +  feature.properties.LOCATION + '</h5>');
    return L.marker(latlng).bindPopup(popup);
  }
});

$.getJSON("geojson/industries/munFish.geojson", function(data) {
  munPorts.addData(data);
  munPorts.eachLayer(function(layer) {
    layer.addTo(munPortsSub);
  });
});

/* Grouping of map overlays */
var overlays = [
   {
    group: "Boundaries",
    layers: [
      {
        name: "Regions",
        layer: regions
      },
      {
        name: "Provinces",
        layer: province
      },
      {
        name: "Municipalities/Cities",
        layer: municity
      },
      {
        name: "Maritime",
        layer: maritime
      },
      {
        name: "Municipal Waters",
        layer: MW
      },
      {
        name: "NIPAS Sites",
        layer:PA
      }
    ]
  },
  {
    group: "Sites",
    layers: [
      {
        name:"Province Sites",
        layer: provS
      },
      {
        name:"Municipality Sites",
        layer: munCi
      }
    ]
  },
  {
    group: "Habitat",
    collapsed: true,
    layers: [
      /*{
        name: "Corals",
        layer: corals
      },
      {
        name: "Mangroves",
        layer: mangroves
      },*/
      {
        name: "ARRAS Data",
        layer: arras
      }
    ]
  },
  {
    group: "Land - Sea Cover",
    collapsed: true,
    layers: [
     /* {
        name: "Aquaculture",
        layer: aquaculture
      },*/
      //START LAND COVER (testing), as Image Overlay sila @ "imageOverlay.js"
      {
        name: "Annual Crop",
        layer: annualCrop
      },
      {
        name: "Built-up",
        layer: builtup
      },
      {
        name: "Closed Forest",
        layer: closedForest
      },
      {
        name: "Fallow",
        layer: fallow
      },
      {
        name: "Fish Pond",
        layer: fishpond
      },
      {
        name: "Grassland",
        layer: grassland
      },
      {
        name: "Inland Water",
        layer: inlandWater
      },
      {
        name: "Mangrove Forest",
        layer: mgrvForest
      },
      {
        name: "Marshland/Swamp",
        layer: swamp
      },
      {
        name: "Open/Barren",
        layer: openBarren
      },
      {
        name: "Open Forest",
        layer: openForest
      },
      {
        name: "Perennial Crop",
        layer: perennialCrop
      },
      {
        name: "Shrubs",
        layer: shrubs
      },
      {
        name: "Wooded Grassland",
        layer: woodedGrassland
      }
    ]
  },
  {
    group: "Physical Stressors",
    layers: [
      {
        name: "Sediment Plume",
        layer: sedimentplume
      // },
      // {
      //   name: "Storm Tracks",
      //   layer: storm
      // },
      // {
      //   name: "Storm Radii",
      //   layer: stormRad
      },
      {
        name: "National SSTA",
        layer: ssta
      },
      {
        name: "National PARA",
        layer: para
      },
      {
        name: "National WSA",
        layer: wsa
      }
    ]
  },
  {
    group: "Industries",
    layers: [
      {
        name: "Mining Agreements",
        layer: mining
      },
      {
        name: "Petroleum Contracts",
        layer: petroleum
      },
      {
        name: "Geothermal Contracts",
        layer: geothermal
      },
      {
        name: "Coal Contracts",
        layer: coal
      },
      {
        name: "Regional Fish Ports",
        layer: regPorts
      },
      {
        name: "Municipal Fish Ports",
        layer: munPortsSub
      }
    ]
  }
];

/* Base Layers (can only select one at a time) */
var baseLayers = [
  {
    group: "Basemaps",
    collapsed: true,
    layers: [
      {
        name: "ESRI",
        layer: ESRI
      },
      {
        name: "Google",
        layer: Google
      },
      {
        name: "NAMRIA",
        layer: Namria
      }
      // {
      //   name: "Hydda Full",
      //   layer: Hydda_Full
      // },
      // {
      //   name: "ESRI World Street Map",
      //   layer: esriWorldStreet
      // },
      // {
      //   name: "ESRI World Imagery",
      //   layer: esriWorldImagery
      // }
    ]
  }
];


/* Addition of panel layer control to the map */
var panelLayers1 = new L.Control.PanelLayers(baseLayers, overlays, {
  collapsibleGroups: true,
  position: 'topright',
  collapsed: false,
  compact: false
}).addTo(map);

/*Preload province layer every load of website*/
//province.addTo(map);

// Disable dragging,wheelZoom when user's cursor enters the element
sidebar.getContainer().addEventListener('mouseover', function () {
    map.dragging.disable();
    map.scrollWheelZoom.disable();
    map.doubleClickZoom.disable();
});

// Re-enable dragging when user's cursor leaves the element
sidebar.getContainer().addEventListener('mouseout', function () {
    map.dragging.enable();
    map.scrollWheelZoom.enable();
    map.doubleClickZoom.enable();
});