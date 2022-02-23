// Set up array to hold period value of sliders (coral, mgrv, sedplume, aqua)
var coralPeriod = ["<span>Persistent</span>","<span>1996-1997</span>","<span>1998-2000</span>","<span>2013-2014</span>","<span>2017</span>"];
var mgrvPeriod = ["<span>Persistent</span>","<span>1996</span>","<span>2005</span>","<span>2015</span>","<span>2017</span>"];
var plumePeriod =["<span>Year 1</span>","<span>Year 2</span>","<span>Year 3</span>","<span>Year 4</span>"];
var aquaPeriod =["<span>Persistent</span>","<span>1996</span>","<span>2005</span>","<span>2015</span>","<span>2017</span>"];


  
/* START OF SEDIMENT PLUME SLIDER OPTIONS */
$("#plumeSlider")                   
// activate the slider with options
.slider({ 
    min: 0, 
    max: plumePeriod.length-1, 
    value: 0,
    animate: 300
})         
// add pips with the labels set to "plumePeriod"
.slider("pips", {
    rest: "label",
    labels: plumePeriod
})
.on("slidechange", function(e,ui) {
  deleteSedPlumeInfo();
  removeStormInfo();
  $("#storm-legend").hide();
  $("#stormOpt").hide();

  if(stormLine) {
    map.removeLayer(stormPoints);
    map.removeLayer(stormLine);
    map.removeLayer(stormRadii);
  }  
  if (ui.value == 0) {
    map.removeLayer(sedPlumeYear1);
    map.removeLayer(sedPlumeYear2);
    map.removeLayer(sedPlumeYear3);
    map.removeLayer(sedPlumeYear4);
    map.addLayer(sedPlumeYear1);

    layerPlume = L.layerGroup(sedPlumeYear1);
    layerPlume.addTo(map);
  }
  else if (ui.value == 1) {
    map.removeLayer(sedPlumeYear1);
    map.removeLayer(sedPlumeYear2);
    map.removeLayer(sedPlumeYear3);
    map.removeLayer(sedPlumeYear4);
    map.addLayer(sedPlumeYear2);

    layerPlume = L.layerGroup(sedPlumeYear2);
    layerPlume.addTo(map);
  }
  else if (ui.value == 2) {
    map.removeLayer(sedPlumeYear1);
    map.removeLayer(sedPlumeYear2);
    map.removeLayer(sedPlumeYear3);
    map.removeLayer(sedPlumeYear4);
    map.addLayer(sedPlumeYear3);
       
    layerPlume = L.layerGroup(sedPlumeYear3);
    layerPlume.addTo(map);
  }
  else if (ui.value == 3) {
    map.removeLayer(sedPlumeYear1);
    map.removeLayer(sedPlumeYear2);
    map.removeLayer(sedPlumeYear3);
    map.removeLayer(sedPlumeYear4);
    map.addLayer(sedPlumeYear4);
        
    layerPlume = L.layerGroup(sedPlumeYear4);
    layerPlume.addTo(map);
  }
});

