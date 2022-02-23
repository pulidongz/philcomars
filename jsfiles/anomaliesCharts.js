function anomaliesCharts(json, chart) {
  var vf;
  var title;
	// Do the same code here for SCA and SWA
  if(chart == 'ssta-chart') {
    vf = "SSTA";
    title = "(+) SSTA (deg C)";
    var Data = [{
      "SSTA" : parseFloat(json.data3[0].ssta),
      "Year" : json.data3[0].year
    }];


    for(var i=1; i<json.data3.length; i++) {
      Data.push({
        SSTA: parseFloat(json.data3[i].ssta),
        Year: json.data3[i].year
      });
    }
  }
	else if(chart == 'para-chart') {
    vf = "PARA";
    title = "(+) PARA (E/m2/day)";
    var Data = [{
      "PARA" : parseFloat(json.data3[0].para),
      "Year" : json.data3[0].year
    }];


    for(var i=1; i<json.data3.length; i++) {
      Data.push({
        PARA: parseFloat(json.data3[i].para),
        Year: json.data3[i].year
      });
    }
  }
  else {
    vf = "WSA";
    title = "WSA (m/s)";
    var Data = [{
      "WSA" : parseFloat(json.data3[0].wsa),
      "Year" : json.data3[0].year
    }];


    for(var i=1; i<json.data3.length; i++) {
      Data.push({
        WSA: parseFloat(json.data3[i].wsa),
        Year: json.data3[i].year
      });
    }
  }

	/* Convert to 0 all 0 or negative SSTA values */
	// for(var i=0; i<sstaData.length; i++) {
	// 	if(sstaData[i].SSTA < 0) {
	// 		sstaData[i].SSTA = 0;
	// 	}
	// }

	AmCharts.makeChart(chart, {
    "type": "serial",
    "theme": "light",
    "startDuration": 2,
    "dataProvider": Data,
    "categoryField": "Year",

    "categoryAxis": {
      "title": "Year",
      "autoGridCount": false,
      "gridPosition": "start",
      "gridThickness": 1,
    },

    "valueAxes": [{
      "title": title
    }],

    "export": {
     "enabled": true
    },

    "graphs": [{
      "valueField": vf,
      "type": "column",
      "fillAlphas": 0.8,
      "fillColors": "#FF0000",
      "negativeFillColors": "#071F5B",
      "balloonText": "[[category]]: <b>[[value]]</b>"
      
    }],

    "chartCursor": {
      "cursorAlpha": 0,
      "zoomable":false,
      "valueZoomable":true
    }
  });
}