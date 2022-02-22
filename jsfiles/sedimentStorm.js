function showNoData(feature) {
    for (var key in feature.properties) {
        if(feature.properties.hasOwnProperty(key)) {
            if(feature.properties[key] == null) {
                feature.properties[key] = "No data";
            }
        } 
    } 
}


function showSedimentStorm(json) {
    if(json.data[0].prov != 'ZAMBALES') {
    	alert("Data not yet processed.");
      return false;
    }
    
    /* Show storm lines */
    $.getJSON(json.data[0].geojson_line, function(data) {
      stormLine = L.geoJson(data, {
        style: stormStyle,
        onEachFeature: function (feature, layer) {
          layer.on({
            click: function (e) {
              /* Show storm track line information as popup */
              var popup = L.popup()
                .setLatLng(e.latlng)
                .setContent("<h5 class='popup-header'><center><strong>Storm Track Line</strong></center></h5>"
                              + "<table class='popup-table' align='center'><tr>"
                                + "<td class='ind-popup'>Region</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.REGION + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Province</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.PROV + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Period</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.PERIOD + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Year</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.YEAR + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Start Date</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.START_DATE + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>End Date</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.END_DATE + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Local Name</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.LOC_NAME + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>International Name</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.INTL_NAME + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Nature</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.NATURE + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Minimum Pressure</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.MIN_PRES + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Maximum Wind</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.MAX_WIND + "</strong></td>"
                              + "</tr></table>")
              .openOn(map);
            }
          });
        }
      }).addTo(map);
    });
    /* Show storm points */
    $.getJSON(json.data[0].geojson_points, function(data) {
      stormPoints = L.geoJson(data, {
        pointToLayer: function (feature, latlng) {
          return L.circleMarker(latlng, stormMarker(feature));
        },
        onEachFeature: function (feature, layer) {
          layer.on({
            /* Show in storm points info after clicking on a storm marker */
            click: function (e) {
              // stormPointsInfo(feature.properties.LOC_NAME);
              showNoData(feature);
              document.getElementById("storm-region").innerHTML = feature.properties.REGION;
              document.getElementById("storm-province").innerHTML = feature.properties.PROV;
              document.getElementById("storm-period").innerHTML = feature.properties.PERIOD;
              document.getElementById("storm-year").innerHTML = feature.properties.YEAR;
              document.getElementById("storm-datetime").innerHTML = feature.properties.YYYYMMDDHH;
              document.getElementById("storm-locname").innerHTML = feature.properties.LOC_NAME;
              document.getElementById("storm-intlname").innerHTML = feature.properties.INTL_NAME;
              document.getElementById("storm-nature").innerHTML = feature.properties.NATURE;
              /* Check if no data */
              // if(feature.properties.JMA_WIND == -999) {
              //   document.getElementById("storm-wind").innerHTML = "No data";
              // }
              // else {
                document.getElementById("storm-wind").innerHTML = feature.properties.JMA_WIND;
              // }
              // if(feature.properties.JMA_PRES == -999) {
                // document.getElementById("storm-press").innerHTML = "No data";
              // }
              // else {
                document.getElementById("storm-press").innerHTML = feature.properties.JMA_PRES;
              // }
              $(document).ready(function() {
                $('#stressors1').removeClass('active');
                $('#infotab-sedimentplume').removeClass('in active');
                $('#stressors2').addClass('active');
                $('#infotab-stormtrack').addClass('in active');
              });
              sidebar.open('stressors');
            } 
          });
        }
      }).addTo(map);
    });
    /* Show storm radii */
    $.getJSON(json.data[0].geojson_radii, function(data) {
      stormRadii = L.geoJson(data, {
        style: stormRadiiStyle,
        onEachFeature: function (feature, layer) {
          layer.on({
            /* Show in popup maritime boundary name when hovering over a feature */
            click: function (e) {
              var popup = L.popup()
                .setLatLng(e.latlng)
                .setContent("<h5 class='popup-header'><center><strong>Storm Track Radius</strong></center></h5>"
                              + "<table class='popup-table' align='center'><tr>"
                                + "<td class='ind-popup'>Region</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.REGION + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Province</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.PROV + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Period</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.PERIOD + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Year</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.YEAR + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Local Name</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.LOC_NAME + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>International Name</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.INTL_NAME + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Nature</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.NATURE + "</strong></td>"
                              + "</tr>"
                              + "<tr><td class='ind-popup'>Radius</td>"
                                + "<td class='ind-popup'><strong>" + feature.properties.RAD_30KT + "</strong></td>"
                              + "</tr></table>")
                .openOn(map);
            }
          });
        }
      }).addTo(map).bringToBack();
    });
}


/* Selecting storm */
function selectStorm(stormName) {
    if(stormLine) {
      map.removeLayer(stormPoints);
      map.removeLayer(stormLine);
      map.removeLayer(stormRadii);
    }  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            showSedimentStorm(json);
        }
    };
    var url = "phpfiles/selectStorm.php?loc_name=" + stormName + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}


/* Show available storm options per period */
function sedimentStorm(province, period) {
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
          document.getElementById("stormByPeriod").innerHTML = xhttp.responseText;
        }
    };
    var url = "phpfiles/plumeClick.php?prov=" + province + "&period=" + period + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}