/* START OF INSTANTIATION OF HABITAT AND AQUACULTURE LAYERS TO AVOID NULL LAYER ERRORS */
var coral_persistent;
var coralyear1;
var coralyear2;
var coralyear3;
var coralyear4;

$.getJSON("geojson/blank_geo.geojson", function(data){
  coral_persistent = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  coralyear1 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  coralyear2 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  coralyear3 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  coralyear4 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});

var mgrv_persistent;
var mangroveyear1;
var mangroveyear2;
var mangroveyear3;
var mangroveyear4;

$.getJSON("geojson/blank_geo.geojson", function(data){
  mgrv_persistent = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  mangroveyear1 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  mangroveyear2 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  mangroveyear3 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  mangroveyear4 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});

var aquaYear1;
var aquaYear2;
var aquaYear3;
var aquaYear4;

$.getJSON("geojson/blank_geo.geojson", function(data){
  aquaYear1 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  aquaYear2 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  aquaYear3 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
$.getJSON("geojson/blank_geo.geojson", function(data){
  aquaYear4 = L.geoJson(data, {
      style: coralyearstyle,
      onEachFeature: function (feature, layer){
      }
  }).addTo(map);
});
/* END OF INSTANTIATION OF HABITAT AND AQUACULTURE LAYERS TO AVOID NULL LAYER ERRORS */


/* Remove all Sociodemographic info on sidebar */
function removeSocioInfo() {
    document.getElementById("ssta-chart").innerHTML = "";
    document.getElementById("para-chart").innerHTML = "";
    document.getElementById("wsa-chart").innerHTML = "";
    document.getElementById('region').innerHTML = "";
    document.getElementById('province').innerHTML = "";
    document.getElementById('municity').innerHTML = "";
    document.getElementById('nomun').innerHTML = "";
    document.getElementById('pop15').innerHTML = "";
    document.getElementById('ic').innerHTML = "";
    document.getElementById('nobar').innerHTML= "";
    document.getElementById('area').innerHTML= "";
    document.getElementById('nofish').innerHTML= "";
}

/* Remove habitat info on sidebar */
function deleteHabitatInfo() {
    document.getElementById("hab-region").innerHTML = "";
    document.getElementById("hab-province").innerHTML = "";
    document.getElementById("hab-municity").innerHTML = "";
    document.getElementById("coral-area").innerHTML = "";
    document.getElementById("coral-descript").innerHTML = "";
    document.getElementById("mangrove-area").innerHTML = "";
    document.getElementById("mangrove-descript").innerHTML = "";
}

/* Remove coral overlays and reset slider to Persistent Year */
function resetCoral() {
    deleteHabitatInfo();
    $("#coralSlider").slider({value:0});
    $("#coral-label").hide();
    $("#coralSlider").hide();
     map.removeLayer(coral_persistent);
     map.removeLayer(coralyear1);
     map.removeLayer(coralyear2);
     map.removeLayer(coralyear3);
     map.removeLayer(coralyear4);
}
/* Remove mangrove overlays and reset slider to Persistent Year */
function resetMgrv() {
    deleteHabitatInfo();
    $("#mgrvSlider").slider({value:0});
    $("#mgrv-label").hide();
    $("#mgrvSlider").hide();
    map.removeLayer(mgrv_persistent);
    map.removeLayer(mangroveyear1);
    map.removeLayer(mangroveyear2);
    map.removeLayer(mangroveyear3);
    map.removeLayer(mangroveyear4);
}
/* Clear all info on Habitat */
function resetHabitatSlider() {
    resetCoral();
    resetMgrv();
}

/* Remove Aquaculture info on sidebar */
function deleteAquacultureInfo() {
    document.getElementById("aqua-region").innerHTML = "";
    document.getElementById("aqua-province").innerHTML = "";
    document.getElementById("aqua-municity").innerHTML = "";
    document.getElementById("aqua-area").innerHTML = "";
    document.getElementById("aqua-descript").innerHTML = "";
}

function resetAquaSlider() {
    deleteAquacultureInfo();
    $("#aquaSlider").slider({value:0});
    $("#aqua-label").hide();
    $("#aquaSlider").hide();
    map.removeLayer(aquaYear1);
    map.removeLayer(aquaYear2);
    map.removeLayer(aquaYear3);
    map.removeLayer(aquaYear4);
}

/* Remove all Industry info on sidebar */
function removeIndustryInfo() {
    document.getElementById("ind-name").innerHTML = "";
    document.getElementById("ind-no").innerHTML = "";
    document.getElementById("ind-location").innerHTML = "";
    document.getElementById("ind-area").innerHTML = "";
    document.getElementById("ind-dateApp").innerHTML = "";
    document.getElementById("ind-dateExp").innerHTML = "";
    document.getElementById('ind-status').innerHTML = "";
    document.getElementById('industry-desc').innerHTML = "";
}
/* Remove all Storm Track info on sidebar */
function removeStormInfo() {
    document.getElementById("storm-region").innerHTML = "";
    document.getElementById("storm-province").innerHTML = "";
    document.getElementById("storm-period").innerHTML = "";
    document.getElementById("storm-year").innerHTML = "";
    document.getElementById("storm-datetime").innerHTML = "";
    document.getElementById("storm-locname").innerHTML = "";
    document.getElementById("storm-intlname").innerHTML = "";
    document.getElementById("storm-nature").innerHTML = "";
    document.getElementById("storm-wind").innerHMTL = "";
    document.getElementById("storm-press").innerHTML = "";
}

/* Remove all Sediment Plume info on sidebar */
function deleteSedPlumeInfo() {
    document.getElementById("plume-region").innerHTML = "";
    document.getElementById("plume-province").innerHTML = "";
    document.getElementById("plume-lsdate").innerHTML = "";
    document.getElementById("plume-event").innerHTML = "";
    document.getElementById("plume-period").innerHTML = "";
}

function resetSedPlumeSlider(){
    deleteSedPlumeInfo();
    $("#plumeSlider").slider({value:0});
    map.removeLayer(sedPlumeYear1);
    map.removeLayer(sedPlumeYear2);
    map.removeLayer(sedPlumeYear3);
    map.removeLayer(sedPlumeYear4);
    map.removeLayer(sedimentplume);
}


/* Removing all active overlays and information on sidebar */
function removeOverlays() {
    if(geojson) {
        map.removeLayer(geojson);
    }
    if(geojsonSearch) {
      map.removeLayer(geojsonSearch);
    }
    if(choroplethLayer) {
        map.removeLayer(choroplethLayer);
    }
    if(selected) {
        map.removeLayer(selected);
    }
    if(stormLine) {
        map.removeLayer(stormPoints);
        map.removeLayer(stormLine);
        map.removeLayer(stormRadii);
    }  

    /* Habitat */
    //map.removeLayer(corals);
    //map.removeLayer(mangroves);
    map.removeLayer(arras);
    /* Boundaries */
    map.removeLayer(maritime);
    map.removeLayer(PA);
    map.removeLayer(regions);
    map.removeLayer(province);
    map.removeLayer(municity);
    map.removeLayer(MW);
    /* Land-Sea Cover */
    //map.removeLayer(aquaculture);
    map.removeLayer(annualCrop);
    map.removeLayer(builtup);
    map.removeLayer(closedForest);
    map.removeLayer(fallow);
    map.removeLayer(fishpond);
    map.removeLayer(grassland);
    map.removeLayer(inlandWater);
    map.removeLayer(mgrvForest);
    map.removeLayer(swamp);
    map.removeLayer(openBarren);
    map.removeLayer(openForest);
    map.removeLayer(perennialCrop);
    map.removeLayer(shrubs);
    map.removeLayer(woodedGrassland);

    /* Sites */
    map.removeLayer(provS);
    map.removeLayer(munCi);
    /* Physical Stressors */
    // map.removeLayer(storm);
    // map.removeLayer(stormRad);
    map.removeLayer(sedimentplume);
    map.removeLayer(ssta);
    map.removeLayer(para);
    map.removeLayer(wsa);
    /* Industries */
    map.removeLayer(mining);
    map.removeLayer(petroleum);
    map.removeLayer(geothermal);
    map.removeLayer(coal);
    map.removeLayer(regPorts);
    map.removeLayer(munPortsSub);
	map.setView([13.599512,121.984222],6);
	
    removeSocioInfo();
    removeIndustryInfo();
    deleteHabitatInfo();
    resetHabitatSlider();
    removeStormInfo();
    resetSedPlumeSlider();
    deleteAquacultureInfo();
    resetAquaSlider();

  	$(document).ready(function() {
    	$(".choro").hide();
  	});
  	sidebar.close();
}
