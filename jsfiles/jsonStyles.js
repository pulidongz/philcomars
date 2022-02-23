/* Functions for designing/styling feeatures */


/* Selected feature style */
/* Also used in search results */
var selected;
function select(e){
  selected = e.layer;
  selected.bringToFront();
  selected.setStyle({
    weight: 2,
    color: '#666',  
    fillOpacity: 0.8,
    fillColor: 'yellow'
  });
}

/* Search Feature Style */
function style(feature) {
  return {
    fillColor: '#801515',
    color: '#666',
    weight: 2,
    opacity: 1,
    // dashArray: '3',
    fillOpacity: 0.8
  };
}

/* Coral Style */
function coralstyle(feature) {
  return {
    fillColor: '#FF6E6E',
    weight: 2,
    opacity: 1,
    color: '#FF6E6E',
    dashArray: '3',
    fillOpacity: 1
  };
}

/* Coral Style for Year 1, Year 2, Year 3, Year 4 */
function coralyearstyle(feature) {
  return {
    fillColor: '#FF6E6E',
    weight: 1,
    opacity: 1,
    color: '#FF6E6E',
    dashArray: '3',
    fillOpacity: 0.3,
    clickable: true
  };
}

/* Mangrove Style */
function mangrovestyle(feature) {
  return {
    fillColor: '#38A800',
    weight: 2,
    opacity: 1,
    color: '#38A800',
    dashArray: '3',
    fillOpacity: 1
  };
}

/* Mangrove Style for Year 1, Year 2, Year 3, Year 4 */
function mangroveyearstyle(feature) {
  return {
    fillColor: '#38A800',
    weight: 2,
    opacity: 1,
    color: '#38A800',
    dashArray: '3',
    fillOpacity: 0.3,
    clickable: true
  };
}

/* Aquaculture Style */
function aquastyle(feature) {
  return {
    fillColor: '#0A718A',
    weight: 2,
    opacity: 1,
    color: '#0A718A',
    fillOpacity: 1,
    clickable: true
  };
}
/* Aquaculture Style for Year 1, Year 2, Year 3, Year 4 */
function aquayearstyle(feature) {
  return {
    fillColor: '#0A718A',
    weight: 2,
    opacity: 1,
    color: '#0A718A',
    fillOpacity: 0.3,
    clickable: true
  };
}

/* MPA Style */
function PAStyle(feature) {
  return{
    color:  'black',
    fillColor: '#52A55C',
    weight: 1,
    opacity: 1,
    dashArray: 1,
    fillOpacity: 0.8
  };
}

/* Region, Province, Municity Boundary Style */
function RPMStyle(feature) {
  return{
    color:  '#808080',
    weight: 1,
    opacity: 1,
    fillOpacity: 0
  };
}

/* Municipal Waters Style */
function mwstyle(feature) {
  return {
    // fillColor: '#AF7AC5',
    weight: 1,
    opacity: 1,
    color: '#566573',
    fillOpacity: 0
  };
}

function mwPoly(feature) {
  return {
    opacity: 0,
    fillOpacity: 0
  };
}


/* Assign different colors to different maritime boundaries */
function getColorMaritime(MARI_ID) {
  return MARI_ID == 0  ? '#76448A' :
         MARI_ID == 1  ? '#873600' :
         MARI_ID == 2  ? '#1B4F72' :
         MARI_ID == 3  ? '#FFE700' :
                         '#FD00AB' ;
}

/* Maritime Boundary Style */
function maritimeStyle(feature) {
  return {
    color: getColorMaritime(feature.properties.MARI_ID),
    weight: 2,
  };
}

/* Sediment Plume Style */
function sedPlumeStyle(feature) {
  return {
    color: '#AA6939',
    fillColor: '#AA6939',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.6,
    clickable: true
  }
}

/* Sediment Plume Style for Year 1, Year 2, Year 3, Year 4 */
function sedplumeyearstyle(feature) {
  return {
    fillColor: '#2A1C0E',
    weight: 1,
    opacity: 1,
    color: '#654321',
    dashArray: '3',
    fillOpacity: 0.3,
    clickable: true
  };
}

/* Storm Styles */
/* Storm line style */
function stormStyle(feature) {
  return {
    color: stormMarkerColor(feature.properties.PROV),
    weight: 2
  }
}

/* Show different color for each storm that affected a province site */
function stormMarkerColor(province) {
  return province == 'ZAMBALES'  ? '#801515' :
         province == 'BATANGAS'  ? '#0B083B' :
         province == 'PALAWAN'   ? '#AAA839' :
         province == 'OCCIDENTAL MINDORO'  ? '#034500' :
         province == 'ROMBLON'   ? '#580F4F' :
                                   '#313975' ;
}

/* Storm marker style */
function stormMarker(feature) {
  return {
    radius: 5,
    color: stormMarkerColor(feature.properties.PROV),
    fillColor: stormMarkerColor(feature.properties.PROV),
    fillOpacity: 0.5
  };
}

/* Storm radii style */
function stormRadiiStyle(feature) {
  return {
    color: stormMarkerColor(feature.properties.PROV),
    fillColor: stormMarkerColor(feature.properties.PROV),
    weight: 1,
    fillOpacity: 0.2
  }
}
/* End of storm style */

/* Anomalies Style */
function anomaliesColor(anomaly, R, Y) {
  return anomaly > R  ? '#FF0000' : /* Red */
         anomaly > Y  ? '#e5e500' : /* Yellow */
                        '#009900' ; /* Green */

}

function surfaceWindAnomaliesColor(anomaly, R, Y, G, W, Db, B) {
  return anomaly > R  ? '#FF0000' : /* Red */
         anomaly > Y  ? '#e5e500' : /* Yellow */
         anomaly > G  ? '#009900' : /* Green */
         anomaly > W  ? '#ffffff' : /* white */
         anomaly > Db ? '#0276FD' : /* Diamond Blue */
         anomaly > B  ? '#0000b2' : /* Blue */
                        '#993299' ; /* Purple */ 
}

function SSTAStyle(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_98, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_98, 0.524771, 0.304184),
    fillOpacity: 0.5,
    weight: 1
  }
}

function PARAStyle(feature) {
  return {
    color: anomaliesColor(feature.properties.PARA_98, 1.941858, 1.155151),
    fillColor: anomaliesColor(feature.properties.PARA_98, 1.941858, 1.155151),
    fillOpacity: 0.5,
    weight: 1
  }
}

function WSAStyle(feature) {
  return {
    color: surfaceWindAnomaliesColor(feature.properties.WSA_98, 2.171598, 1.021142, 0.000001, 0, -0.942443, -1.754149),
    fillColor: surfaceWindAnomaliesColor(feature.properties.WSA_98, 2.171598, 1.021142, 0.000001, 0, -0.942443, -1.754149),
    fillOpacity: 0.5,
    weight: 1
  }
}


/* Sites Style */
function siteStyle(feature) {
  return{
    fillColor: '#2A06A5',
    color: 'black',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.5,
    opacity: 0.5
  };
}

/* Petroleum Contracts Style */
function petrolStyle(feature) {
  return{
    fillColor: '#008080',
    color: '#008080',
    weight: 1,
    opacity: 1,
    // dashArray: '2',
    fillOpacity: 0.5
  };
}

/* Mining Agreements Style */
function miningStyle(feature) {
  return{
    fillColor: '#B33E00',
    color: '#B33E00',
    weight: 1,
    opacity: 1,
    // dashArray: '2',
    fillOpacity: 0.5
  };
}

/*Geothermal Agreement Style */
function geothermalStyle(feature) {
  return{
    fillColor: '#7E9F35',
    color: '#7E9F35',
    weight: 1,
    opacity: 1,
    // dashArray: '2',
    fillOpacity: 0.5
  };
}

/*Coal Agreement Style */
function coalStyle(feature) {
  return{
    fillColor: '#4A4C47',
    color: '#4A4C47',
    weight: 1,
    opacity: 1,
    // dashArray: '2',
    fillOpacity: 0.5
  };
}

/* Markers design for Regional Fish Ports */
var circleMarker = {
  color: '#FF7800',
  fillColor: '#FF7800',
  fillOpacity: 0.8
};

function getColor(INC_CLASS) {
  return INC_CLASS > 7    ? '#761316' :
         INC_CLASS > 3    ? '#B57275' :
                            '#F4D2D4' ;                           
}

function ICStyle(feature) {
  return {
    fillColor: getColor(feature.properties.INC_CLASS),
    weight: 2,
    fillOpacity: 1,
    color: 'white'
  };
}




/* Population Choropleth Style */
// 
// function popstyle(feature) {
//   return {
//     fillColor: getColor(feature.properties.POP2015),
//     weight: 2,
//     opacity: 1,
//     color: 'gray',
//     dashArray: '3',
//     fillOpacity: 0.7
//   };
// }

// function getColor(POP2015) {
//   return POP2015 > 104771  ? '#761316' :
//          POP2015 > 64841   ? '#954245' :
//          POP2015 > 34947   ? '#B57275' :
//          POP2015 > 28360   ? '#D4A2A4' :
//                              '#F4D2D4' ;
// }
// function popboxcolor() {
//   var box = document.getElementsByClassName('box');
//   for(var i=0; i< box.length; i++) {
//     box[i].style.backgroundColor = "#F4D2D4";
//   }
//   document.getElementById('pop-box1').style.backgroundColor = "#F4D2D4";
//   document.getElementById('pop-box2').style.backgroundColor = "#D4A2A4";
//   document.getElementById('pop-box3').style.backgroundColor = "#B57275";
//   document.getElementById('pop-box4').style.backgroundColor = "#954245";
//   document.getElementById('pop-box5').style.backgroundColor = "#761316";
// }