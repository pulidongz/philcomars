
/* Show CORAL information on the sidebar 'Habitat - Corals and Mangroves tab' */
function coralHabitatInfo(json) {

/* Load Persistent coral geojson to coral_persistent layer, coral slider first option */
var coral_persistent = new L.LayerGroup();
$.getJSON(json.coral[0].p_geojson, function(data){
  var geoJson = L.geoJson(data, {
      style: coralstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(coral_persistent);
});

/* Load Year 1 coral geojson to coralyear1, coral slider second option */
var coralyear1 = new L.LayerGroup();
$.getJSON(json.coral[0].y1_geojson, function(data){
  var geoJson = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(coralyear1);
});

/* Load Year 2 coral geojson to coralyear2, coral slider third option */
var coralyear2 = new L.LayerGroup();
$.getJSON(json.coral[0].y2_geojson, function(data){
  var geoJson = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(coralyear2);
});

/* Load Year 3 coral geojson to coralyear2, coral slider third option */
var coralyear3 = new L.LayerGroup();
$.getJSON(json.coral[0].y3_geojson, function(data){
  var geoJson = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(coralyear3);
});

/* Load Year 4 coral geojson to coralyear2, coral slider third option */
var coralyear4 = new L.LayerGroup();  
$.getJSON(json.coral[0].y4_geojson, function(data){
  var geoJson = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
        layer.on({
          click: function (e){
            // populateHabitatFields(feature.properties.MUNI_NAME);
            deleteHabitatInfo();
            document.getElementById("hab-region").innerHTML = feature.properties.REGION;
            document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
            document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
            document.getElementById("coral-area").innerHTML = feature.properties.AREA_HA + " Ha";
            document.getElementById("coral-descript").innerHTML = feature.properties.DESCRIPT;
            sidebar.open('coralsMangroves');
          }
        });
      }
  }).addTo(coralyear4);
});

/* S T A R T  O F  C O R A L S L I D E R */
// Set up array to hold period value of sliders (coral, mgrv, sedplume, aqua)
  var coralPeriod = ["<span>OFF</span>","<span>Persistent</span>","<span>1996-1997</span>","<span>1998-2000</span>","<span>2013-2014</span>","<span>2017</span>"];
  /* START OF CORAL SLIDER OPTIONS */
  $("#coralSlider")                   
  // activate the slider with options
  .slider({ 
      min: 0, 
      max: coralPeriod.length-1, 
      value: 0,
      animate: 300
  })         
  // add pips with the labels set to "coralPeriod"
  .slider("pips", {
      rest: "label",
      labels: coralPeriod
  })       
  // and whenever the slider changes, the corresponding coralPeriod layer is displayed
  .on("slidechange", function(e,ui) {
      if (ui.value == 0) {
          map.removeLayer(coral_persistent);
          map.removeLayer(coralyear1);
          map.removeLayer(coralyear2);
          map.removeLayer(coralyear3);
          map.removeLayer(coralyear4);
        }
        else if (ui.value == 1) {
          map.addLayer(coral_persistent);
          map.removeLayer(coralyear1);
          map.removeLayer(coralyear2);
          map.removeLayer(coralyear3);
          map.removeLayer(coralyear4);
        }
        else if (ui.value == 2) {
          map.addLayer(coral_persistent);
          map.addLayer(coralyear1);
          map.removeLayer(coralyear2);
          map.removeLayer(coralyear3);
          map.removeLayer(coralyear4);
        }
        else if (ui.value == 3) {
          map.addLayer(coral_persistent);
          map.addLayer(coralyear2);
          map.removeLayer(coralyear1);
          map.removeLayer(coralyear3);
          map.removeLayer(coralyear4);
        }
        else if (ui.value == 4) {
          map.addLayer(coral_persistent);
          map.addLayer(coralyear3);
          map.removeLayer(coralyear1);
          map.removeLayer(coralyear2);
          map.removeLayer(coralyear4);
        }
        else if (ui.value == 5) {
          map.addLayer(coral_persistent);
          map.addLayer(coralyear4);
          map.removeLayer(coralyear1);
          map.removeLayer(coralyear2);
          map.removeLayer(coralyear3);
        }
  });

  /* Set the coral slider to 1st tick/value */
  $("#coralSlider").slider({value:0});
  $("#coral-label").show();
  $("#coralSlider").show();

}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/* Show MANGROVE information on the sidebar 'Habitat - Corals and Mangroves tab' */
function mgrvHabitatInfo(json) {

  var mgrv_persistent = new L.LayerGroup();
  $.getJSON(json.mgrv[0].p_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: mangrovestyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              // populateHabitatFields(feature.properties.MUNI_NAME);
              deleteHabitatInfo();
              document.getElementById("hab-region").innerHTML = feature.properties.REGION;
              document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('coralsMangroves');
            }
          });
        }
    }).addTo(mgrv_persistent);
  });

  var mangroveyear1 = new L.LayerGroup();
  $.getJSON(json.mgrv[0].y1_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: mangroveyearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              // populateHabitatFields(feature.properties.MUNI_NAME);
              deleteHabitatInfo();
              document.getElementById("hab-region").innerHTML = feature.properties.REGION;
              document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('coralsMangroves');
            }
          }); 
        }
    }).addTo(mangroveyear1);
  });
  
  var mangroveyear2 = new L.LayerGroup();
  $.getJSON(json.mgrv[0].y2_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: mangroveyearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              // populateHabitatFields(feature.properties.MUNI_NAME);
              deleteHabitatInfo();
              document.getElementById("hab-region").innerHTML = feature.properties.REGION;
              document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('coralsMangroves');
            }
          }); 
        }
    }).addTo(mangroveyear2);
  });

  var mangroveyear3 = new L.LayerGroup();
  $.getJSON(json.mgrv[0].y3_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: mangroveyearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              // populateHabitatFields(feature.properties.MUNI_NAME);
              deleteHabitatInfo();
              document.getElementById("hab-region").innerHTML = feature.properties.REGION;
              document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('coralsMangroves');
            }
          }); 
        }
    }).addTo(mangroveyear3);
  });

  var mangroveyear4 = new L.LayerGroup();
  $.getJSON(json.mgrv[0].y4_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: mangroveyearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              // populateHabitatFields(feature.properties.MUNI_NAME);
              deleteHabitatInfo();
              document.getElementById("hab-region").innerHTML = feature.properties.REGION;
              document.getElementById("hab-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("hab-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("mangrove-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("mangrove-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('coralsMangroves');
            }
          }); 
        }
    }).addTo(mangroveyear4);
  });

  /* S T A R T  O F  M A N G R O V E S L I D E R */
  // Set up array to hold period value of sliders (coral, mgrv, sedplume, aqua)
  var mgrvPeriod = ["<span>OFF</span>","<span>Persistent</span>","<span>1996</span>","<span>2005</span>","<span>2015</span>","<span>2017</span>"];
  /* START OF MANGROVE SLIDER OPTIONS */
  $("#mgrvSlider")                   
  // activate the slider with options
  .slider({ 
      min: 0, 
      max: mgrvPeriod.length-1, 
      value: 0,
      animate: 300
  })         
  // add pips with the labels set to "mgrvPeriod"
  .slider("pips", {
      rest: "label",
      labels: mgrvPeriod
  })
  .on("slidechange", function(e,ui) {
    if (ui.value == 0) {
      map.removeLayer(mgrv_persistent);
      map.removeLayer(mangroveyear1);
      map.removeLayer(mangroveyear2);
      map.removeLayer(mangroveyear3);
      map.removeLayer(mangroveyear4);
    }
    else if (ui.value == 1) {
      map.addLayer(mgrv_persistent);
      map.removeLayer(mangroveyear1);
      map.removeLayer(mangroveyear2);
      map.removeLayer(mangroveyear3);
      map.removeLayer(mangroveyear4);
    }
    else if (ui.value == 2) {
      map.addLayer(mgrv_persistent);
      map.addLayer(mangroveyear1);
      map.removeLayer(mangroveyear2);
      map.removeLayer(mangroveyear3);
      map.removeLayer(mangroveyear4);
    }
    else if (ui.value == 3) {
      map.addLayer(mgrv_persistent);
      map.addLayer(mangroveyear2);
      map.removeLayer(mangroveyear1);
      map.removeLayer(mangroveyear3);
      map.removeLayer(mangroveyear4);
    }
    else if (ui.value == 4) {
      map.addLayer(mgrv_persistent);
      map.addLayer(mangroveyear3);
      map.removeLayer(mangroveyear1);
      map.removeLayer(mangroveyear2);
      map.removeLayer(mangroveyear4);
    }
    else if (ui.value == 5) {
      map.addLayer(mgrv_persistent);
      map.addLayer(mangroveyear4);
      map.removeLayer(mangroveyear1);
      map.removeLayer(mangroveyear2);
      map.removeLayer(mangroveyear3);
    }
  });

  /* Set the mangrove slider to 2nd tick/value */
  $("#mgrvSlider").slider({value:0});
  $("#mgrv-label").show();
  $("#mgrvSlider").show();
}

/*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

/* Show AQUACULTURE information on the sidebar 'Habitat - Corals and Mangroves tab' */
function aquaLandSeaInfo(json){

  var aquaYear1 = new L.LayerGroup();  
  $.getJSON(json.aqua[0].y1_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: aquayearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              deleteAquacultureInfo();
              document.getElementById("aqua-region").innerHTML = feature.properties.REGION;
              document.getElementById("aqua-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("aqua-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("aqua-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("aqua-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('landseaCover');
              $(document).ready(function() {
                $('#landcover-tab').removeClass('active');
                $('#infotab-landcover').removeClass('in active');
                $('#aquaculture-tab').addClass('active');
                $('#infotab-aquaculture').addClass('in active');
              });
            }
          });
        }
    }).addTo(aquaYear1);
  });

  var aquaYear2 = new L.LayerGroup();  
  $.getJSON(json.aqua[0].y2_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: aquayearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              deleteAquacultureInfo();
              document.getElementById("aqua-region").innerHTML = feature.properties.REGION;
              document.getElementById("aqua-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("aqua-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("aqua-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("aqua-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('landseaCover');
              $(document).ready(function() {
                $('#landcover-tab').removeClass('active');
                $('#infotab-landcover').removeClass('in active');
                $('#aquaculture-tab').addClass('active');
                $('#infotab-aquaculture').addClass('in active');
              });
            }
          });
        }
    }).addTo(aquaYear2);
  });

  var aquaYear3 = new L.LayerGroup();  
  $.getJSON(json.aqua[0].y3_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: aquayearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              deleteAquacultureInfo();
              document.getElementById("aqua-region").innerHTML = feature.properties.REGION;
              document.getElementById("aqua-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("aqua-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("aqua-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("aqua-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('landseaCover');
              $(document).ready(function() {
                $('#landcover-tab').removeClass('active');
                $('#infotab-landcover').removeClass('in active');
                $('#aquaculture-tab').addClass('active');
                $('#infotab-aquaculture').addClass('in active');
              });
            }
          });
        }
    }).addTo(aquaYear3);
  });

  var aquaYear4 = new L.LayerGroup();  
  $.getJSON(json.aqua[0].y4_geojson, function(data){
    var geoJson = L.geoJson(data, {
        style: aquayearstyle,
        onEachFeature: function (feature, layer){
          layer.on({
            click: function (e){
              deleteAquacultureInfo();
              document.getElementById("aqua-region").innerHTML = feature.properties.REGION;
              document.getElementById("aqua-province").innerHTML = feature.properties.PROVINCE;
              document.getElementById("aqua-municity").innerHTML = feature.properties.MUNI_NAME;
              document.getElementById("aqua-area").innerHTML = feature.properties.AREA_HA + " Ha";
              document.getElementById("aqua-descript").innerHTML = feature.properties.DESCRIPT;
              sidebar.open('landseaCover');
              $(document).ready(function() {
                $('#landcover-tab').removeClass('active');
                $('#infotab-landcover').removeClass('in active');
                $('#aquaculture-tab').addClass('active');
                $('#infotab-aquaculture').addClass('in active');
              });
            }
          });
        }
    }).addTo(aquaYear4);
  });

  /* START OF AQUACULTURE SLIDER OPTIONS */
  var aquaPeriod =["<span>OFF</span>","<span>1996</span>","<span>2005</span>","<span>2015</span>","<span>2017</span>"];
  $("#aquaSlider")                   
  // activate the slider with options
  .slider({ 
      min: 0, 
      max: aquaPeriod.length-1, 
      value: 0,
      animate: 300
  })         
  // add pips with the labels set to "plumePeriod"
  .slider("pips", {
      rest: "label",
      labels: aquaPeriod
  })
  .on("slidechange", function(e,ui) {
    if (ui.value == 0) {
      map.removeLayer(aquaYear1);
      map.removeLayer(aquaYear2);
      map.removeLayer(aquaYear3);
      map.removeLayer(aquaYear4);
    }
    else if (ui.value == 1) {
      map.addLayer(aquaYear1);
      map.removeLayer(aquaYear2);
      map.removeLayer(aquaYear3);
      map.removeLayer(aquaYear4);
    }
    else if (ui.value == 2) {
      map.addLayer(aquaYear2);
      map.removeLayer(aquaYear1);
      map.removeLayer(aquaYear3);
      map.removeLayer(aquaYear4);
    }
    else if (ui.value == 3) {
      map.addLayer(aquaYear3);
      map.removeLayer(aquaYear1);
      map.removeLayer(aquaYear2);
      map.removeLayer(aquaYear4);
    }
    else if (ui.value == 4) {
      map.addLayer(aquaYear4);
      map.removeLayer(aquaYear1);
      map.removeLayer(aquaYear2);
      map.removeLayer(aquaYear3);
    }
  });

  /* Set the aquaculture slider to 2nd tick/value */
  $("#aquaSlider").slider({value:0});
  $("#aqua-label").show();
  $("#aquaSlider").show();
}



/* Sediment Plume different period layers 2-4 */
var sedPlumeYear2 = L.geoJson(null, {
    style: sedPlumeStyle,
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            deleteSedPlumeInfo();
            document.getElementById("plume-region").innerHTML = feature.properties.REGION;
            document.getElementById("plume-province").innerHTML = feature.properties.PROV;
            document.getElementById("plume-lsdate").innerHTML = feature.properties.LS_DATE;
            document.getElementById("plume-event").innerHTML = feature.properties.STORM_EVEN;
            document.getElementById("plume-period").innerHTML = feature.properties.PERIOD;
            sedimentStorm(feature.properties.PROV, feature.properties.PERIOD);
            sidebar.open('stressors');
            $(document).ready(function() {
              $('#stressors2').removeClass('active');
              $('#infotab-stormtrack').removeClass('in active');
              $('#stressors1').addClass('active');
              $('#infotab-sedimentplume').addClass('in active');
            });
          }
      });
    }
});
$.getJSON("geojson/stressors/sedPlume/sedPlumeY2.geojson", function(data) {
    sedPlumeYear2.addData(data);
});

var sedPlumeYear3 = L.geoJson(null, {
    style: sedPlumeStyle,
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            deleteSedPlumeInfo();
            document.getElementById("plume-region").innerHTML = feature.properties.REGION;
            document.getElementById("plume-province").innerHTML = feature.properties.PROV;
            document.getElementById("plume-lsdate").innerHTML = feature.properties.LS_DATE;
            document.getElementById("plume-event").innerHTML = feature.properties.STORM_EVEN;
            document.getElementById("plume-period").innerHTML = feature.properties.PERIOD;
            sedimentStorm(feature.properties.PROV, feature.properties.PERIOD);
            sidebar.open('stressors');
            $(document).ready(function() {
              $('#stressors2').removeClass('active');
              $('#infotab-stormtrack').removeClass('in active');
              $('#stressors1').addClass('active');
              $('#infotab-sedimentplume').addClass('in active');
            });
          }
      });
    }
});
$.getJSON("geojson/stressors/sedPlume/sedPlumeY3.geojson", function(data) {
    sedPlumeYear3.addData(data);
});

var sedPlumeYear4 = L.geoJson(null, {
    style: sedPlumeStyle,
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            deleteSedPlumeInfo();
            document.getElementById("plume-region").innerHTML = feature.properties.REGION;
            document.getElementById("plume-province").innerHTML = feature.properties.PROV;
            document.getElementById("plume-lsdate").innerHTML = feature.properties.LS_DATE;
            document.getElementById("plume-event").innerHTML = feature.properties.STORM_EVEN;
            document.getElementById("plume-period").innerHTML = feature.properties.PERIOD;
            sedimentStorm(feature.properties.PROV, feature.properties.PERIOD);
            sidebar.open('stressors');
            $(document).ready(function() {
              $('#stressors2').removeClass('active');
              $('#infotab-stormtrack').removeClass('in active');
              $('#stressors1').addClass('active');
              $('#infotab-sedimentplume').addClass('in active');
            });
          }
      });
    }
});
$.getJSON("geojson/stressors/sedPlume/sedPlumeY4.geojson", function(data) {
    sedPlumeYear4.addData(data);
});