/* Activating only layers with similar boundaries */
/* Selecting layers with no overlaps */

/* Function to set Selected layer to original layer color */
function resetSelected() {
  if(selected) {
    selected.setStyle({
      color:  '#808080',
      weight: 1,
      opacity: 1,
      fillOpacity: 0
    });
  }
}

// function checkOtherOverlays() {
//   if (geojson) {
//     map.removeLayer(geojson);
//   }
// }

map.on('overlayadd', function(eo)
{
  $(document).ready(function() {
    resetSelected();
    if(eo.name == 'Regions')
    {
      setTimeout(function() { map.removeLayer(province) }, 10);
      setTimeout(function() { map.removeLayer(municity) }, 10);
      setTimeout(function() { map.removeLayer(provS) }, 10);
      setTimeout(function() { map.removeLayer(munCi) }, 10);
      // checkOtherOverlays();
    }
    else if(eo.name == 'Provinces')
    {
      // province.bringToBack();
      setTimeout(function() { map.removeLayer(regions) }, 10);
      setTimeout(function() { map.removeLayer(municity) }, 10);
      setTimeout(function() { map.removeLayer(munCi) }, 10);
      setTimeout(function() { map.removeLayer(provS) }, 10);
      // checkOtherOverlays();
    }

    else if(eo.name == 'Municipalities/Cities')
    {
      setTimeout(function() { map.removeLayer(regions) }, 10);
      setTimeout(function() { map.removeLayer(province) }, 10);
      setTimeout(function() { map.removeLayer(provS) }, 10);
      setTimeout(function() { map.removeLayer(munCi) }, 10);
      // checkOtherOverlays();
    }

    // May problem ata here 
    else if(eo.name == 'Province Sites')
    {
      setTimeout(function() { map.removeLayer(regions) }, 10);
      setTimeout(function() { map.removeLayer(munCi) }, 10);
      setTimeout(function() { map.removeLayer(municity) }, 10);
      setTimeout(function() { map.removeLayer(province) }, 10);
      // checkOtherOverlays();
    }
    else if(eo.name == 'Municipality Sites')
    {
      setTimeout(function() { map.removeLayer(regions) }, 10);
      setTimeout(function() { map.removeLayer(province) }, 10);
      setTimeout(function() { map.removeLayer(provS) }, 10);
      setTimeout(function() { map.removeLayer(municity) }, 10);
      // checkOtherOverlays();
    }

    else if(eo.name == 'Sediment Plume')
    {
      sidebar.open('stressors');
      $(document).ready(function() {
        $('#stressors2').removeClass('active');
        $('#infotab-stormtrack').removeClass('in active');
        $('#stressors1').addClass('active');
        $('#infotab-sedimentplume').addClass('in active');
      });
      $("#plume-label").show();
      $("#plumeSlider").show();
    }
    else if(eo.name == 'National SSTA')
    {
      setTimeout(function() {map.removeLayer(para) }, 10);
      setTimeout(function() {map.removeLayer(wsa) }, 10);

      sidebar.open('information');
      $(document).ready(function() {
        /* Make SST Anomaly tab active, others inactive */
        $('#socioecon-tab').removeClass('active');
        $('#information-tab-socioecon').removeClass('in active');
        $('#wsa-tab').removeClass('active');
        $('#information-tab-WSA').removeClass('in active');
        $('#para-tab').removeClass('active');
        $('#information-tab-PARA').removeClass('in active');
        $('#ssta-tab').addClass('active');
        $('#information-tab-SST').addClass('in active');
      });
    }
    else if(eo.name == 'National PARA')
    {
      setTimeout(function() {map.removeLayer(ssta) }, 10);
      setTimeout(function() {map.removeLayer(wsa) }, 10);

      sidebar.open('information');
      $(document).ready(function() {
        /* Make PAR Anomaly tab active, others inactive */
        $('#socioecon-tab').removeClass('active');
        $('#information-tab-socioecon').removeClass('in active');
        $('#wsa-tab').removeClass('active');
        $('#information-tab-WSA').removeClass('in active');
        $('#ssta-tab').removeClass('active');
        $('#information-tab-SST').removeClass('in active');
        $('#para-tab').addClass('active');
        $('#information-tab-PARA').addClass('in active');
      });
    }
    else if(eo.name == 'National WSA')
    {
      setTimeout(function() {map.removeLayer(para) }, 10);
      setTimeout(function() {map.removeLayer(ssta) }, 10);

      sidebar.open('information');
      $(document).ready(function() {
        /* Make SST Anomaly tab active, others inactive */
        $('#socioecon-tab').removeClass('active');
        $('#information-tab-socioecon').removeClass('in active');
        $('#para-tab').removeClass('active');
        $('#information-tab-PARA').removeClass('in active');
        $('#ssta-tab').removeClass('active');
        $('#information-tab-SST').removeClass('in active');
        $('#wsa-tab').addClass('active');
        $('#information-tab-WSA').addClass('in active');
      });
    }
    /* Show Corals and Mangroves dropdown when layer checked */
    else if(eo.name == 'Corals')
    {
      sidebar.open('coralsMangroves');
      $("#coral-label").show();
      $("#coralSlider").show();
    }
    else if(eo.name == 'Mangroves')
    {
      $("#mgrv-label").show();
      sidebar.open('coralsMangroves');
      $("#mgrvSlider").show();
    }
    /* Show Aquaculture sidebar when layer checked */
    else if(eo.name == 'Aquaculture')
    {
      sidebar.close();
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#landcover-tab').removeClass('active');
        $('#infotab-landcover').removeClass('in active');
        $('#aquaculture-tab').addClass('active');
        $('#infotab-aquaculture').addClass('in active');
      });
      $("#aqua-label").show();
      $("#aquaSlider").show();
    }
    /* Show Land Cover layers when checked */
    else if(eo.name == 'Annual Crop')
    {
      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Annual Crop')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Built-up')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Closed Forest')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Fallow')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Fish Pond')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Grassland')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Inland Water')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Mangrove Forest')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Marshland/Swamp')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Open/Barren')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Open Forest')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Perennial Crop')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Shrubs')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(woodedGrassland) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }
    else if(eo.name == 'Wooded Grassland')
    {
      /* Hide other active Land Cover layers */
      setTimeout(function() { map.removeLayer(annualCrop) }, 10);
      setTimeout(function() { map.removeLayer(builtup) }, 10);
      setTimeout(function() { map.removeLayer(closedForest) }, 10);
      setTimeout(function() { map.removeLayer(fallow) }, 10);
      setTimeout(function() { map.removeLayer(fishpond) }, 10);
      setTimeout(function() { map.removeLayer(grassland) }, 10);
      setTimeout(function() { map.removeLayer(inlandWater) }, 10);
      setTimeout(function() { map.removeLayer(mgrvForest) }, 10);
      setTimeout(function() { map.removeLayer(swamp) }, 10);
      setTimeout(function() { map.removeLayer(openBarren) }, 10);
      setTimeout(function() { map.removeLayer(openForest) }, 10);
      setTimeout(function() { map.removeLayer(perennialCrop) }, 10);
      setTimeout(function() { map.removeLayer(shrubs) }, 10);

      /* Show Land Cover legend at sidebar*/
      sidebar.open('landseaCover');
      $(document).ready(function() {
        $('#aquaculture-tab').removeClass('active');
        $('#infotab-aquaculture').removeClass('in active');
        $('#landcover-tab').addClass('active');
        $('#infotab-landcover').addClass('in active');
      });  
    }

    else if (eo.name == 'Mining Agreements') {
      sidebar.close();
      removeIndustryInfo();
      sidebar.open('industries');
    }
    else if (eo.name == 'Petroleum Contracts') {
      sidebar.close();
      removeIndustryInfo();
      sidebar.open('industries');
    }
    else if (eo.name == 'Geothermal Contracts') {
      sidebar.close();
      removeIndustryInfo();
      sidebar.open('industries');
    }
     else if (eo.name == 'Coal Contracts') {
      sidebar.close();
      removeIndustryInfo();
      sidebar.open('industries');
    }
  });
});


/* Hide sidebar info when layer is unchecked*/
map.on('overlayremove', function(eo) {
  $(document).ready(function() {

    //Check active overlays, and switch sidebar.open() to active layer
    if (map.hasLayer(province)
      ||map.hasLayer(municity)
      ||map.hasLayer(provS)
      ||map.hasLayer(munCi)
      ||map.hasLayer(ssta)
      ||map.hasLayer(para)
      ||map.hasLayer(wsa)) {
      sidebar.open('information');
    }
    else if (map.hasLayer(sedimentplume)||map.hasLayer(stormLine)||map.hasLayer(stormRadii)) {
      sidebar.open('stressors');
    }
    else if (map.hasLayer(annualCrop)||map.hasLayer(builtup)||map.hasLayer(closedForest)||map.hasLayer(fallow)||map.hasLayer(fishpond)||map.hasLayer(grassland)||map.hasLayer(inlandWater)||map.hasLayer(mgrvForest)||map.hasLayer(swamp)||map.hasLayer(openBarren)||map.hasLayer(openForest)||map.hasLayer(perennialCrop)||map.hasLayer(shrubs)||map.hasLayer(woodedGrassland)) {
      sidebar.open('landseaCover');
      if (map.hasLayer) {}
    }
    else if(map.hasLayer(mining)||map.hasLayer(petroleum)||map.hasLayer(geothermal)||map.hasLayer(coal)) {
      sidebar.open('industries');
    }
    else {
      sidebar.close();
    }

    //Check if layer is removed
    if(eo.name == 'Protected Areas') {
      if(selected) {
        geojson.resetStyle(selected);
      }
    }
    //HABITAT
    else if(eo.name == 'Corals')
    {
      $("#coral-label").hide();
      $("#coralSlider").hide();
      resetCoral();
    }
    else if(eo.name == 'Mangroves')
    {
      $("#mgrv-label").hide();
      $("#mgrvSlider").hide();
      resetMgrv();
    }
    //PHYSICAL STRESSORS
    else if(eo.name == 'Sediment Plume'){
      if(stormLine) {
        map.removeLayer(stormPoints);
        map.removeLayer(stormLine);
        map.removeLayer(stormRadii);
      }  
      $("#plume-label").hide();
      $("#plumeSlider").hide();
      $("#storm-legend").hide();
      $("#stormOpt").hide();
      resetSedPlumeSlider();
    }
    else if(eo.name == 'Storm Tracks') {
      map.removeLayer('stormLayer');
    }
    //LAND-SEA COVER
    else if(eo.name == 'Aquaculture')
    {
      $("#aqua-label").hide();
      $("#aquaSlider").hide();
      resetAquaSlider();
    }
    else if(eo.name == 'Land Cover') {
      $(".undefined.leaflet-control").hide();
    }
    //INDUSTRIES
    else if(eo.name == 'Mining Agreements') {
      removeIndustryInfo(); 
    }
    else if(eo.name == 'Petroleum Contracts') {
      removeIndustryInfo();
    }
    else if(eo.name == 'Geothermal Contracts') {
      removeIndustryInfo();
    }
    else if(eo.name == 'Coal Contracts') {
      removeIndustryInfo();
    }
  });
});