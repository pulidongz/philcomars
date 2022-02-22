/* Function for checking (from database) if province is a province site using the province PSGC */
/* If yes, create anomalies charts and show available choropleth options */
function checkProvinceSite(psgc_prov) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            // if(json.data[0].psgc_prov == 72200000){     /* If selected province is Cebu */
                // document.getElementById("region").innerHTML = json.data[0].reg_name;
                // document.getElementById("province").innerHTML = json.data[0].prov_name;
                // document.getElementById("area").innerHTML = json.data[0].area + " ha";
                // document.getElementById("nomun").innerHTML = json.data[0].num_muni;
                // document.getElementById("nobar").innerHTML = json.data[0].num_brgy;
                // document.getElementById("pop15").innerHTML = "No data";
                // document.getElementById("ic").innerHTML = json.data[0].incclssnme + " (as of 2015)";
                // document.getElementById("nofish").innerHTML = "No data";

                /* Create SST, SC, and SW Anomalies Charts */
                // anomaliesCharts(json, "ssta-chart");
                // anomaliesCharts(json, "para-chart");
                // anomaliesCharts(json, "wsa-chart");
                // sidebar.open('information');
                // return false;
            // }
            if(json.data[0].site == 'TRUE') {       /* If selected province is a site */
                provinceSitesInfo(json);            /* Show province info (showInfo.js) */          
                $(document).ready(function() {
                    $("div.choro").show();          /* Show available choropleth options */
                    $("#chorodropdown").val('0');       /* Set default choropleth options value */
                    $("#choropleth-legend1").hide();     /* Hide choropleth legend */       
                    $("#choropleth-legend2").hide();
                });
                sidebar.open('information');
                /* Create SST, SC, and SW Anomalies Charts */
                anomaliesCharts(json, "ssta-chart");
                anomaliesCharts(json, "para-chart");
                anomaliesCharts(json, "wsa-chart");
                
            }
            else {
                $(document).ready(function() {
                    $("div.choro").hide();          /* Hide available choropleth options */
                });
                sidebar.close();
            }
        }
    };
    var url = "phpfiles/provinceClick.php?psgc_prov=" + psgc_prov + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}


/* Function for checking (from database) if municity is a municity site using the municity PSGC */
/* If yes, create anomalies charts and show available choropleth options */
function checkMunicitySite(psgc_muni) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            $(document).ready(function() {
                $("div.choro").hide();      /* Hide available choropleth options */
                $("#chorodropdown").val('0');      /* Set option value to default */         
            });
            if(json.data[0].site == 'TRUE') {       /* If selected municity is a site */
                muniSitesInfo(json);                /* Show municity info (showInfo.js) */ 
                
                /* Create SST, SC, and SW Anomalies Charts */
                // anomaliesCharts(json, "sst-chart");
                // anomaliesCharts(json, "sca-chart");
                // anomaliesCharts(json, "swa-chart");
                sidebar.open('information');
            }
            else {
                sidebar.close();
            }
        }
    };
    var url = "phpfiles/muniClick.php?psgc_muni=" + psgc_muni + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send();
}

/* Check if ARRAS site is classification map or habitat then output the corresponding html link */
function checkARRASSite(municity) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            console.log(json);
            arrasPopupContent(json);            /* Show ARRAS classification map info (showInfo.js) */
        }
    };
    var url = "phpfiles/arrasClick.php?municity=" + municity + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}