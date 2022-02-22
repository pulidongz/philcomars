function HowToUse() {
	var intro = introJs();
    intro.setOptions({
        steps: [
            { 
          	  intro: "<center>Welcome to the</br><b>PhilCoMaRS</b> Website!</center>"
            },
            {
              element: document.querySelector('#sidebar'),
              intro: "<center><b>Sidebar Panel</b></center>"
            },
            {
              element: document.querySelector('.home-tab'),
              intro: "<center><b>Home Window</b></br></center><center>Contains basic information about the website.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.info-tab'),
              intro: "<center><b>Site Information Window</b></br></center><center>Contains Sociodemographic Data and Anomaly Graphs.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.industry-tab'),
              intro: "<center><b>Industries Information Window</b></br></center><center>Contains information on Petroleum and Geothermal Contracts, Mining Agreements and Fish Ports.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.coralmang-tab'),
              intro: "<center><b>Corals and Mangroves Information Window</b></br></center><center>Contains information on Coral and Mangrove national data for specific periods.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.stressors-tab'),
              intro: "<center><b>Physical Stressors Window</b></br></center><center>Contains Tropical Storm Data per province for specific time periods.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.landseaCover-tab'),
              intro: "<center><b>Land - Sea Cover Window</b></br></center><center>Contains Aquaculture and Land-Cover data for specific time periods.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.search-tab'),
              intro: "<center><b>Search Window</b></br></center><center>A quicker way to find information about the six (6) priority sites.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.leaflet-panel-layers-list'),
              intro: "<center><b>Overlay Control Panel</b></br></center><center>Contains all the basemaps and available overlays.</center>",
              position: 'right'
            },
            {
              element: document.querySelector('.btn.btn-danger'),
              intro: "<center>This button removes <b>ALL</b> currently active layers.</center>",
              position: 'right'
            },
            {
              element: ('div.leaflet-panel-layers-expanded.leaflet-control'),
              intro: "<center>That's all. :)</center>",
              position: 'right'
            }
        ]
    });
    intro.start();
}

function Screenshot() {
  html2canvas(document.body).then(function(canvas) {
    // Export the canvas to its data URI representation
    var base64image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    // Open the image in a new window
    window.location.href=base64image;
});
}