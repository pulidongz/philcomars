var geojsonSearch;

/* Highlight and Zoom on Searched Feature */
function highlightAndZoomOnSearch(json_url, boundaryLayer, lat, lon) {
  if(geojsonSearch) {
    map.removeLayer(geojsonSearch);
  }
  $.getJSON(json_url, function(data){
    geojsonSearch = L.geoJson(data, {
      style: style
    });
    geojsonSearch.addTo(map);
    pass = 1;
  });

  /* Boundary Layer Notation (1=Region, 2=Province, 3=Municipality) */
  // if(boundaryLayer == 1) {
  //   map.setView([lat, lon], 8);
  // }
  if (boundaryLayer == 2) {
    map.setView([lat, lon], 9);
  }
  else if (boundaryLayer == 3) {
    map.setView([lat, lon], 10);
  }
}
/* Search Button Functions */

/* Boundary Layer Notation (1=Region, 2=Province, 3=Municipality) */
var boundaryLayer;
function submitForm(code) {
  /* Click Search */
  if(code == 'search'){

    /* Municipal Level Search */
    if(document.getElementById("munOpt").value != '') {
      var mun_id = document.getElementById("munOpt").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var json = JSON.parse(xhttp.responseText);
          /* Clear all information */
          removeOverlays();
          muniSitesInfo(json);                /* Load Site Information Tab contents */
          coralHabitatInfo(json);             /* Load geojson URLs for the coral layer slider in Habitat Tab */
          mgrvHabitatInfo(json);              /* Load geojson URLs for the mangrove layer slider in Habitat Tab */
          aquaLandSeaInfo(json);              /* Load geojson URLs for the aquaculture layer slider in Habitat Tab */
          sidebar.open('information');
          var json_url = json.data[0].muni_geojson;
          var lat = json.data[0].lat;
          var lon = json.data[0].lon;
          var boundaryLayer = 3;
          highlightAndZoomOnSearch(json_url, boundaryLayer, lat, lon);
         
        }
      };
      var url="phpfiles/muniClick.php?psgc_muni=" + mun_id + "&id=" + Math.random;
      xhttp.open("GET", url, true);
      xhttp.send();
    }

    /* Provincial Level Search */
    else if(document.getElementById("provOpt").value != '') {
      var prov_id = document.getElementById("provOpt").value;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var json = JSON.parse(xhttp.responseText);
          /* Clear all information */
          removeOverlays();
          removeSocioInfo();
          provinceSitesInfo(json);
          var json_url = json.data[0].prov_geojson;
          var lat = json.data[0].lat;
          var lon = json.data[0].lon;
          var boundaryLayer = 2;

          if (json.data[0].site == 'TRUE') {
            $(document).ready(function() {
              $("div.choro").show();          /* Show available choropleth options */
              $("#chorodropdown").val('0');       /* Set default choropleth options value */
              $("#choropleth-legend1").hide();     /* Hide choropleth legend */       
              $("#choropleth-legend2").hide();
            });
            /* Create SST, SC, and SW Anomalies Charts */
              anomaliesCharts(json, "ssta-chart");
              anomaliesCharts(json, "para-chart");
              anomaliesCharts(json, "wsa-chart");
          }
          else{
            $(document).ready(function() {
              $("div.choro").hide();          /* Hide available choropleth options */
            });
          }
          
          sidebar.open('information');
          highlightAndZoomOnSearch(json_url, boundaryLayer, lat, lon);

          /* Load geojson URLs for the coral layer slider in Habitat Tab */
          coralHabitatInfo(json);
          /* Load geojson URLs for the mangrove layer slider in Habitat Tab */
          mgrvHabitatInfo(json);
          /* Load geojson URLs for the aquaculture layer slider in Habitat Tab */
          aquaLandSeaInfo(json);
        }
      };
      var url="phpfiles/provinceClick.php?psgc_prov=" + prov_id + "&id=" + Math.random;
      xhttp.open("GET", url, true);
      xhttp.send();
      return false;
      
    }

    /* Regional Level Search */
    // else if(document.getElementById("regOpt").value != '') {
    //   var reg_id = document.getElementById("regOpt").value;
    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //     if(xhttp.readyState == 4 && xhttp.status == 200) {
    //       var json = JSON.parse(xhttp.responseText);
    //       resetInfo();
    //       document.getElementById('region').innerHTML = json.data[0].reg_name;
    //       document.getElementById('psgcreg').innerHTML = json.data[0].psgc_reg;

    //       hideChoroplethOptions();
    //       sidebar.open('information');
    //       var json_url = json.data[0].reg_geojson;
    //       var lat = json.data[0].lat;
    //       var lon = json.data[0].lon;
    //       var boundaryLayer = 1;
    //       highlightAndZoomOnSearch(json_url, boundaryLayer, lat, lon);
    //     }
    //   };
    //   var url="phpfiles/searchReg.php?psgc_reg=" + reg_id + "&id=" + Math.random;
    //   xhttp.open("GET", url, true);
    //   xhttp.send();
   
    //   return false;
    // }
  }

  /* If clear button is pressed or code == '0' */
  else if (code == 'clear') { 
    removeSocioInfo();
    if(geojsonSearch) {
      map.removeLayer(geojsonSearch);
    }
    if(geojson) {
      map.removeLayer(geojson);
    }
    if (choroplethLayer) {
      map.removeLayer(choroplethLayer);
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById('search-location').innerHTML = xhttp.responseText;
      }
    };
    var url = "phpfiles/searchInit.php";
    xhttp.open("GET", url, true);
    xhttp.send();

    removeOverlays();

    map.setView([13.599512,121.984222],6);
  }
}


/* Storm Filter */

var stormLine;
var stormPoints;
var stormRadii;
function showStormLayers(json) {
  if(json.data[0].geojson_line == null) {
    alert("Data not yet processed.")
  }
  
  // for(var i=0; i<json.data.length; i++) {
    /* Show Storm radii */
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
      }).addTo(map);
    });
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
              document.getElementById("storm-region").innerHTML = feature.properties.REGION;
              document.getElementById("storm-province").innerHTML = feature.properties.PROV;
              document.getElementById("storm-period").innerHTML = feature.properties.PERIOD;
              document.getElementById("storm-year").innerHTML = feature.properties.YEAR;
              document.getElementById("storm-datetime").innerHTML = feature.properties.YYYYMMDDHH;
              document.getElementById("storm-locname").innerHTML = feature.properties.LOC_NAME;
              document.getElementById("storm-intlname").innerHTML = feature.properties.INTL_NAME;
              document.getElementById("storm-nature").innerHTML = feature.properties.NATURE;
              /* Check if no data */
              if(feature.properties.JMA_WIND == -999) {
                document.getElementById("storm-wind").innerHTML = "No data";
              }
              else {
                document.getElementById("storm-wind").innerHTML = feature.properties.JMA_WIND;
              }
              if(feature.properties.JMA_PRES == -999) {
                document.getElementById("storm-press").innerHTML = "No data";
              }
              else {
                document.getElementById("storm-press").innerHTML = feature.properties.JMA_PRES;
              }
              $(document).ready(function() {
                $('#enviFac1').removeClass('active');
                $('#infotab-sedimentplume').removeClass('in active');
                $('#enviFac2').addClass('active');
                $('#infotab-stormtrack').addClass('in active');
              });
              sidebar.open('enviFac');
            } 
          });
        }
      }).addTo(map);
    });
    

  // }
  
}

/* Storm Track Search */
function filterStorm(code) {

  /* Click Search */
  if(code == 'search'){
    if(stormLine) {
      map.removeLayer(stormRadii);
      map.removeLayer(stormLine);
      map.removeLayer(stormPoints);
      
    }
    
    /* Storm Name Level Search */
    if(document.getElementById("stormOpt").value != '') {
      console.log(document.getElementById("stormOpt").value);
      var storm = document.getElementById("stormOpt").value;
      var stormProvince = document.getElementById("stormProvOpt").value;
      var stormPeriod = document.getElementById("stormPeriodOpt").value;

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          var json = JSON.parse(xhttp.responseText);
          removeStormInfo();
          showStormLayers(json);
        }
      };
      var url="phpfiles/searchStormName.php?period=" + stormPeriod + "&psgc_prov=" + stormProvince + "&loc_name=" + storm + "&id=" + Math.random;
      xhttp.open("GET", url, true);
      xhttp.send();
    }
    else {
      alert("Select Storm Name!")
    }

    /* Storm PROVINCE Level Search */
    // else if(document.getElementById("stormProvOpt").value != '') {
    //   var stormProv = document.getElementById("stormProvOpt").value;
    //   var stormPeriod = document.getElementById("stormPeriodOpt").value;

    //   var xhttp = new XMLHttpRequest();
    //   xhttp.onreadystatechange = function() {
    //     if (xhttp.readyState == 4 && xhttp.status == 200) {
    //       var json = JSON.parse(xhttp.responseText);
    //       removeStormInfo();
    //       showStormLayers(json);
    //     }
    //   };
    //   var url="phpfiles/searchStormProv.php?psgc_prov=" + stormProv + "&period=" + stormPeriod + "&id=" + Math.random;
    //   xhttp.open("GET", url, true);
    //   xhttp.send();
    // }

  }

   // If clear button is pressed or code == '0' 
  else if (code == 'clear') {
    if(stormLine) {
      map.removeLayer(stormLine);
      map.removeLayer(stormPoints);
      map.removeLayer(stormRadii);
    }
    removeStormInfo();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if(xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById('search-storm').innerHTML = xhttp.responseText;
      }
    };
    var url = "phpfiles/searchStormInit.php";
    xhttp.open("GET", url, true);
    xhttp.send();
  }
}