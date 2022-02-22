
var choroplethLayer;
/* Legend Write-up */
function legend(inte) {
  for(var i=1; i<=5; i++) {
    document.getElementById("legend" + i).innerHTML = inte[i-1];
  }
}

/* Make Legend for Population Interval */
function popInterval(interval) {
  var inte = [];
  inte[0] = Math.round(interval[0]).toLocaleString() + " to " + Math.round(interval[1]).toLocaleString();
  for(var i=1; i<5; i++) {
    inte[i] = Math.round(interval[i] + 1).toLocaleString() + " to " + Math.round(interval[i+1]).toLocaleString();
  }
  legend(inte);
}

/* Function for making choropleth */       
function choropleth(val){
    var prov_name = document.getElementById("province").innerHTML;
    // map.removeLayer(province);
    if(choroplethLayer) {
      map.removeLayer(choroplethLayer);
    }
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var json = JSON.parse(xhttp.responseText);

            /* Choose choropleth options */
            if (val == "0") {
              $(document).ready(function() {
                $("#choropleth-legend1").hide();
                $("#choropleth-legend2").hide();
              });
              /* End function */
              return false; 
            }

            /* Population choropleth is chosen */
            if (val == "1") {
              /* Use population data for choropleth */
              // var choroData = 'POP2015';
              $.getJSON(json.data[0].prov_geojson, function (geojson) {
                choroplethLayer = L.choropleth(geojson, {
                  valueProperty: 'POP2015',
                  scale: ['#F4D2D4', '#761316'],
                  steps: 6,
                  mode: 'q',
                  style: {
                    color: 'white',
                    weight: 2,
                    fillOpacity: 1
                  },
                  onEachFeature: function(feature, layer) {
                    layer.on({
                      click: function(e) {
                        var popup = L.popup()
                            .setLatLng(e.latlng)
                            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
                                  + "<table class='popup-table' align='center'><tr>"
                                  + "<td id='popup-info'>Population: " + feature.properties.POP2015.toLocaleString() + "</td>"
                                  + "</tr></table")
                            .openOn(map);
                      }
                    });
                  }
                }).addTo(map);
                var interval = choroplethLayer.options.limits;
                popInterval(interval);
                
              });
              $(document).ready(function() {
                $("#notes").show();
                $("#choropleth-legend2").hide();
                $("#choropleth-legend1").show();
              });
              
            }

            /* Income Class choropleth is chosen */
            else if (val == '2') {
              // $(document).ready(function() {
              //   $("#choropleth").show();
              // });
              /* Use Income Class Data for choropleth */
              // var choroData = 'INC_CLASS';
              $.getJSON(json.data[0].prov_geojson, function (data) {
                choroplethLayer = L.geoJson(data, {
                  style: ICStyle,
                  onEachFeature: function(feature, layer) {
                    layer.on({
                      click: function(e) {
                        var popup = L.popup()
                            .setLatLng(e.latlng)
                            .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
                                  + "<table class='popup-table' align='center'><tr>"
                                  + "<td class='popup-info'>" + feature.properties.INCCLS + "</td>"
                                  + "</tr></table")
                            .openOn(map);
                      }
                    });
                  }
                }).addTo(map);
              });

              $(document).ready(function() {
                $("#notes").hide();
                $("#choropleth-legend1").hide();
                $("#choropleth-legend2").show();
                
              });
              
              // document.getElementById("iclegend1").innerHTML = "Below P35M";
              // document.getElementById("legend2").innerHTML = "";
              // document.getElementById("legend3").innerHTML = "Between P35M and P80M";
              // document.getElementById("legend4").innerHTML = "";
              // document.getElementById("legend5").innerHTML = "P80M or more";
            }

            

            // Get province geojson file and apply choropleth 
            // $.getJSON(json.data[0].prov_geojson, function (geojson) {
            //   choroplethLayer = L.choropleth(geojson, {
            //     valueProperty: choroData,
            //     scale: ['#F4D2D4', '#761316'],
            //     steps: stepsNo,
            //     mode: 'q',
            //     style: {
            //       color: 'white',
            //       weight: 2,
            //       fillOpacity: 1
            //     },
            //     onEachFeature: function(feature, layer) {
            //       if (val == '1') {
            //         layer.on({
            //           click: function(e) {
            //             var popup = L.popup()
            //                 .setLatLng(e.latlng)
            //                 .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
            //                       + "<table class='popup-table' align='center'><tr>"
            //                       + "<td id='popup-info'>Population: " + feature.properties.POP2015.toLocaleString() + "</td>"
            //                       + "</tr></table")
            //                 .openOn(map);
            //           }
            //         });
            //       }
            //       else if (val == '2') {
            //         layer.on({
            //           click: function(e) {
            //             var popup = L.popup()
            //                 .setLatLng(e.latlng)
            //                 .setContent("<h5 class='popup-header'><center><strong>" + feature.properties.NAME + "</strong></center></h5>"
            //                       + "<table class='popup-table' align='center'><tr>"
            //                       + "<td class='popup-info'>" + feature.properties.INCCLS + "</td>"
            //                       + "</tr></table")
            //                 .openOn(map);
            //           }
            //         });
            //       }
            //     }
            //   }).addTo(map);

            //   console.log(choroplethLayer.options.limits);

              // if (val == "1") {
              //   var interval = choroplethLayer.options.limits;
              //   popInterval(interval);
              //   $(document).ready(function() {
              //     $("#notes").show();
              //   });
              // }
            //   else if (val == '2') {
            //     var inte = [];
            //     for (i=0; i<5; i++) {
            //       inte[i] = "Income Class " + (i+1);
            //     }
            //     legend(inte);
            //     $(document).ready(function() {
            //       $("#notes").hide();
            //     });
            //     // choroplethLayer.options.limits = [1, 2, 3, 4, 5, 6];
            //     // popInterval(choroplethLayer.options.limits);
            //   }
            // });
            
            // $(document).ready(function() {
            //   $("#choropleth-legend").show();
            // });
        }
    };
    var url="phpfiles/searchProv.php?prov_name=" + prov_name + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send();
}

