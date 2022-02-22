var sstaYear =["<span>1988</span>",
				"<span>1989</span>",
				"<span>1990</span>",
				"<span>1991</span>",
				"<span>1992</span>",
				"<span>1993</span>",
				"<span>1994</span>",
				"<span>1995</span>",
				"<span>1996</span>",
				"<span>1997</span>",
				"<span>1998</span>",
				"<span>1999</span>",
				"<span>2000</span>",
				"<span>2001</span>",
				"<span>2002</span>",
				"<span>2003</span>",
				"<span>2004</span>",
				"<span>2005</span>",
				"<span>2006</span>",
				"<span>2007</span>",
				"<span>2008</span>",
				"<span>2009</span>",
				"<span>2010</span>",
				"<span>2011</span>",
				"<span>2012</span>",
				"<span>2013</span>",
				"<span>2014</span>",
				"<span>2015</span>",
				"<span>2016</span>",
				"<span>2017</span>"];

/*var ssta_1988 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_88,  
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1988 SSTA: <center><strong>" + feature.properties.SSTA_88 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1988);
});
function SSTAStyle_88(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_88, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_88, 0.524771, 0.304184),
    fillOpacity: 0.5
  }
}*/
var ssta_1989 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_89,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1989 SSTA: <center><strong>" + feature.properties.SSTA_89 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1989);
});
function SSTAStyle_89(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_89, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_89, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1990 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_90,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1990 SSTA: <center><strong>" + feature.properties.SSTA_90 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1990);
});
function SSTAStyle_90(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_90, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_90, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1991 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_91,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1991 SSTA: <center><strong>" + feature.properties.SSTA_91 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1991);
});
function SSTAStyle_91(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_91, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_91, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1992 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_92,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1992 SSTA: <center><strong>" + feature.properties.SSTA_92 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1992);
});
function SSTAStyle_92(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_92, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_92, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1993 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_93,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1993 SSTA: <center><strong>" + feature.properties.SSTA_93 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1993);
});
function SSTAStyle_93(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_93, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_93, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1994 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_94,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1994 SSTA: <center><strong>" + feature.properties.SSTA_94 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1994);
});
function SSTAStyle_94(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_94, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_94, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1995 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_95,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1995 SSTA: <center><strong>" + feature.properties.SSTA_95 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1995);
});
function SSTAStyle_95(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_95, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_95, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1996 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_96,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1996 SSTA: <center><strong>" + feature.properties.SSTA_96 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1996);
});
function SSTAStyle_96(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_96, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_96, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1997 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_97,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1997 SSTA: <center><strong>" + feature.properties.SSTA_97 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1997);
});
function SSTAStyle_97(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_97, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_97, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1998 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_98,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1998 SSTA: <center><strong>" + feature.properties.SSTA_98 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1998);
});
function SSTAStyle_98(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_98, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_98, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_1999 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_99,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>1999 SSTA: <center><strong>" + feature.properties.SSTA_99 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_1999);
});
function SSTAStyle_99(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_99, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_99, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2000 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_00,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2000 SSTA: <center><strong>" + feature.properties.SSTA_00 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2000);
});
function SSTAStyle_00(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_00, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_00, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2001 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_01,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2001 SSTA: <center><strong>" + feature.properties.SSTA_01 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2001);
});
function SSTAStyle_01(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_01, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_01, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2002 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_02,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2002 SSTA: <center><strong>" + feature.properties.SSTA_02 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2002);
});
function SSTAStyle_02(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_01, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_01, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2003 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_03,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2003 SSTA: <center><strong>" + feature.properties.SSTA_03 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2003);
});
function SSTAStyle_03(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_03, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_03, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2004 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_04,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2004 SSTA: <center><strong>" + feature.properties.SSTA_04 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2004);
});
function SSTAStyle_04(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_04, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_04, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2005 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_05,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2005 SSTA: <center><strong>" + feature.properties.SSTA_05 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2005);
});
function SSTAStyle_05(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_05, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_05, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2006 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_06,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2006 SSTA: <center><strong>" + feature.properties.SSTA_06 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2006);
});
function SSTAStyle_06(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_06, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_06, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2007 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_07,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2007 SSTA: <center><strong>" + feature.properties.SSTA_07 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2007);
});
function SSTAStyle_07(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_07, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_07, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2008 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_08,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2008 SSTA: <center><strong>" + feature.properties.SSTA_08 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2008);
});
function SSTAStyle_08(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_08, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_08, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2009 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_09,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2006 SSTA: <center><strong>" + feature.properties.SSTA_09 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2009);
});
function SSTAStyle_09(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_09, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_09, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2010 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_10,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2006 SSTA: <center><strong>" + feature.properties.SSTA_10 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2010);
});
function SSTAStyle_10(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_10, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_10, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2011 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_11,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2011 SSTA: <center><strong>" + feature.properties.SSTA_11 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2011);
});
function SSTAStyle_11(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_11, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_11, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2012 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_12,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2012 SSTA: <center><strong>" + feature.properties.SSTA_12 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2012);
});
function SSTAStyle_12(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_12, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_12, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2013 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_13,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2013 SSTA: <center><strong>" + feature.properties.SSTA_13 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2013);
});
function SSTAStyle_13(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_13, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_13, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2014 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_14,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2014 SSTA: <center><strong>" + feature.properties.SSTA_14 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2014);
});
function SSTAStyle_14	(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_14, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_14, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2015 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_15,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2015 SSTA: <center><strong>" + feature.properties.SSTA_15 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2015);
});
function SSTAStyle_15(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_15, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_15, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2016 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_16,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2016 SSTA: <center><strong>" + feature.properties.SSTA_16 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2016);
});
function SSTAStyle_16(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_16, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_16, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}
var ssta_2017 = new L.LayerGroup();
$.getJSON("geojson/stressors/SSTA.geojson", function(data){
  var geojson = L.geoJson(data, {
    style: SSTAStyle_17,     /* Set the style of the overlay (jsonStyles.js) */
    onEachFeature: function (feature, layer){
      layer.on({
          click: function (e){
            /* Show SSTA information */
            var popup = L.popup()
              .setLatLng(e.latlng)
              .setContent("<h5 class='popup-info'>2017 SSTA: <center><strong>" + feature.properties.SSTA_17 + "</strong></center></h5>")
              .openOn(map);
          }
      });
    }
  }).addTo(ssta_2017);
});
function SSTAStyle_17(feature) {
  return {
    color: anomaliesColor(feature.properties.SSTA_17, 0.524771, 0.304184),
    fillColor: anomaliesColor(feature.properties.SSTA_17, 0.524771, 0.304184),
    fillOpacity: 0.8
  }
}

/******************************************************************************************************************************************************************/
/* START OF SEDIMENT PLUME SLIDER OPTIONS */
$("#ssta-Slider")                   
// activate the slider with options
.slider({ 
    min: 0, 
    max: sstaYear.length-1, 
    value: 0,
    animate: 300
})         
// add pips with the labels set to "sstaYear"
.slider("pips", {
	first: "label",
    rest: "pip",
    last: "label",
    labels: sstaYear
})
.slider("float", {
	rest: "label",
    labels: sstaYear
})
.on("slidechange", function(e,ui) {
   if (ui.value == 0) {
   	map.removeLayer(ssta);
   	//map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1988);

    ssta = L.layerGroup(ssta_1988);
    ssta.addTo(map);
  }
  else if (ui.value == 1) {
  	map.removeLayer(ssta);
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1989);

    ssta = L.layerGroup(ssta_1989);
    ssta.addTo(map);
  }
  else if (ui.value == 2) {
  	//map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1990);

    ssta = L.layerGroup(ssta_1990);
    ssta.addTo(map);
  }
  else if (ui.value == 3) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1991);

    ssta = L.layerGroup(ssta_1991);
    ssta.addTo(map);
  }
  else if (ui.value == 4) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1992);

    ssta = L.layerGroup(ssta_1992);
    ssta.addTo(map);
  }
  else if (ui.value == 5) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1993);

    ssta = L.layerGroup(ssta_1993);
    ssta.addTo(map);
  }
  else if (ui.value == 6) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1994);

    ssta = L.layerGroup(ssta_1994);
    ssta.addTo(map);
  }
  else if (ui.value == 7) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1995);

    ssta = L.layerGroup(ssta_1995);
    ssta.addTo(map);
  }
  else if (ui.value == 8) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1996);

    ssta = L.layerGroup(ssta_1996);
    ssta.addTo(map);
  }
  else if (ui.value == 9) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1997);

    ssta = L.layerGroup(ssta_1997);
    ssta.addTo(map);
  }
  else if (ui.value == 10) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1998);

    ssta = L.layerGroup(ssta_1998);
    ssta.addTo(map);
  }
  else if (ui.value == 11) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_1999);

    ssta = L.layerGroup(ssta_1999);
    ssta.addTo(map);
  }
  else if (ui.value == 12) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2000);

    ssta = L.layerGroup(ssta_2000);
    ssta.addTo(map);
  }
  else if (ui.value == 13) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2001);

    ssta = L.layerGroup(ssta_2001);
    ssta.addTo(map);
  }
  else if (ui.value == 14) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2002);

    ssta = L.layerGroup(ssta_2002);
    ssta.addTo(map);
  }
  else if (ui.value == 15) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2003);

    ssta = L.layerGroup(ssta_2003);
    ssta.addTo(map);
  }
  else if (ui.value == 16) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2004);

    ssta = L.layerGroup(ssta_2004);
    ssta.addTo(map);
  }
  else if (ui.value == 17) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2005);

    ssta = L.layerGroup(ssta_2005);
    ssta.addTo(map);
  }
  else if (ui.value == 18) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2006);

    ssta = L.layerGroup(ssta_2006);
    ssta.addTo(map);
  }
  else if (ui.value == 19) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2007);

    ssta = L.layerGroup(ssta_2007);
    ssta.addTo(map);
  }
  else if (ui.value == 20) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2008);

    ssta = L.layerGroup(ssta_2008);
    ssta.addTo(map);
  }
  else if (ui.value == 21) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2009);

    ssta = L.layerGroup(ssta_2009);
    ssta.addTo(map);
  }
  else if (ui.value == 22) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2010);

    ssta = L.layerGroup(ssta_2010);
    ssta.addTo(map);
  }
  else if (ui.value == 23) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2011);

    ssta = L.layerGroup(ssta_2011);
    ssta.addTo(map);
  }
  else if (ui.value == 24) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2012);

    ssta = L.layerGroup(ssta_2012);
    ssta.addTo(map);
  }
  else if (ui.value == 25) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2013);

    ssta = L.layerGroup(ssta_2013);
    ssta.addTo(map);
  }
  else if (ui.value == 26) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2014);

    ssta = L.layerGroup(ssta_2014);
    ssta.addTo(map);
  }
  else if (ui.value == 27) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2015);

    ssta = L.layerGroup(ssta_2015);
    ssta.addTo(map);
  }
  else if (ui.value == 28) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2016);

    ssta = L.layerGroup(ssta_2016);
    ssta.addTo(map);
  }
  else if (ui.value == 29) {
    //map.removeLayer(ssta_1988);
    map.removeLayer(ssta_1989);
    map.removeLayer(ssta_1990);
    map.removeLayer(ssta_1991);
    map.removeLayer(ssta_1992);
    map.removeLayer(ssta_1993);
    map.removeLayer(ssta_1994);
    map.removeLayer(ssta_1995);
    map.removeLayer(ssta_1996);
    map.removeLayer(ssta_1997);
    map.removeLayer(ssta_1998);
    map.removeLayer(ssta_1999);
    map.removeLayer(ssta_2000);
    map.removeLayer(ssta_2001);
    map.removeLayer(ssta_2002);
    map.removeLayer(ssta_2003);
    map.removeLayer(ssta_2004);
    map.removeLayer(ssta_2005);
    map.removeLayer(ssta_2006);
    map.removeLayer(ssta_2007);
    map.removeLayer(ssta_2008);
    map.removeLayer(ssta_2009);
    map.removeLayer(ssta_2010);
    map.removeLayer(ssta_2011);
    map.removeLayer(ssta_2012);
    map.removeLayer(ssta_2013);
    map.removeLayer(ssta_2014);
    map.removeLayer(ssta_2015);
    map.removeLayer(ssta_2016);
    map.removeLayer(ssta_2017);
    map.addLayer(ssta_2017);

    ssta = L.layerGroup(ssta_2017);
    ssta.addTo(map);
  }
});