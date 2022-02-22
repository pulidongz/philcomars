/* Check if json has null values */
function noData(json) {
    for (var key in json.data[0]) {
        if(json.data[0].hasOwnProperty(key)) {
            if(json.data[0][key] == null) {
                json.data[0][key] = "No data";
                console.log(json.data[0][key]);
            }
        } 
    } 
}

function openText(industry)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", industry, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("industry-desc").innerHTML = allText;
            }
        }
    }
    rawFile.send(null);
}

/* Show municity site information on sidebar 'Information - Sociodemographic' tab */
function muniSitesInfo(json) {
	document.getElementById("region").innerHTML = json.data[0].reg_name;
    document.getElementById("province").innerHTML = json.data[0].prov_name;
    document.getElementById("municity").innerHTML = json.data[0].muni_name;
    document.getElementById("area").innerHTML = json.data[0].area + " ha";
    document.getElementById("nomun").innerHTML = json.data[0].num_muni;
    document.getElementById("nobar").innerHTML = json.data[0].num_brgy;
    document.getElementById("pop15").innerHTML = json.data[0].pop2015 + " (as of 2015)";
    document.getElementById("ic").innerHTML = json.data[0].inc_class + " (as of 2015)";
    document.getElementById("nofish").innerHTML = json.data[0].num_fisher + " (as of 2015)";
}

/* Show province site information on sidebar 'Information - Sociodemographic' tab */
function provinceSitesInfo(json) {
    var population = 0;
    var no_fisher = 0;

    /* Add population and number of fishermen data from the municipalities in the province */
    for(var i=0; i<json.data2.length; i++) {
        population = population + parseInt((json.data2[i].pop2015).replace(",",""));
        no_fisher = no_fisher + parseInt((json.data2[i].num_fisher).replace(",",""));
    }   
    document.getElementById("region").innerHTML = json.data[0].reg_name;
    document.getElementById("province").innerHTML = json.data[0].prov_name;
    document.getElementById("area").innerHTML = json.data[0].area + " ha";
    document.getElementById("nomun").innerHTML = json.data[0].num_muni;
    document.getElementById("nobar").innerHTML = json.data[0].num_brgy;
    document.getElementById("pop15").innerHTML = population.toLocaleString() + " (as of 2015)";
    document.getElementById("ic").innerHTML = json.data[0].inc_class + " (as of 2015)";
    document.getElementById("nofish").innerHTML = no_fisher.toLocaleString() + " (as of 2015)";
}   

/* Show habitat info for municipality/city site information on sidebar 'Habitat - Corals and Mangroves' tab */
function municityHabitatInfo(json) {
    document.getElementById("hab-region").innerHTML = json.data[0].reg_name;
    document.getElementById("hab-province").innerHTML = json.data[0].prov_name;
    document.getElementById("hab-municity").innerHTML = json.data[0].muni_name;
    document.getElementById("coral-area").innerHTML = json.data[0].area + " ha";
    document.getElementById("coral-descript").innerHTML = json.data[0].num_muni;
    document.getElementById("mangrove-area").innerHTML = json.data[0].num_brgy;
    document.getElementById("mangrove-descript").innerHTML = json.data[0].pop2015 + " (as of 2015)";
}

/* Show mining industry data */
function miningData(NO) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);

            var area = parseFloat(json.data[0].AREA).toLocaleString() + " ha";
            noData(json);
            document.getElementById("ind-name").innerHTML = json.data[0].HOLDER;
            document.getElementById("ind-no").innerHTML = json.data[0].NO;
            document.getElementById("ind-location").innerHTML = json.data[0].PROVINCE;
            document.getElementById("ind-area").innerHTML = area;
            document.getElementById("ind-dateApp").innerHTML = json.data[0].APPROVED;
            document.getElementById("ind-dateExp").innerHTML = json.data[0].EXPIRY;
            document.getElementById("ind-status").innerHTML = json.data[0].STATUS;
            openText("industry/desc/mining.txt");
            sidebar.open('industries');
        }
    };
    var url = "phpfiles/miningClick.php?NO=" + NO + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}


/* Show petroleum industry data */
function petroleumData(NO) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            noData(json);
            document.getElementById("ind-name").innerHTML = json.data[0].operator;
            document.getElementById("ind-no").innerHTML = json.data[0].NO;
            document.getElementById("ind-location").innerHTML = json.data[0].location;
            document.getElementById("ind-area").innerHTML = parseFloat(json.data[0].area).toLocaleString() + " ha";
            document.getElementById("ind-dateApp").innerHTML = json.data[0].effective;
            document.getElementById("ind-dateExp").innerHTML = json.data[0].expiry;
            document.getElementById("ind-status").innerHTML = json.data[0].status;
            openText("industry/desc/petroleum.txt");
            sidebar.open('industries');
        }
    };
    var url = "phpfiles/petroleumClick.php?NO=" + NO + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}

/* Show geothermal industry data */
function geothermalData(NO) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            noData(json);
            document.getElementById("ind-name").innerHTML = json.data[0].COMPANY;
            document.getElementById("ind-no").innerHTML = json.data[0].NO;
            document.getElementById("ind-location").innerHTML = json.data[0].PROVINCE;
            document.getElementById("ind-area").innerHTML = parseFloat(json.data[0].AREA).toLocaleString() + " ha";
            document.getElementById("ind-dateApp").innerHTML = json.data[0].AWARDED;
            document.getElementById("ind-dateExp").innerHTML = "";
            document.getElementById("ind-status").innerHTML = json.data[0].STATUS;
            openText("industry/desc/geothermal.txt");
            sidebar.open('industries');
        }
    };
    var url = "phpfiles/geothermalClick.php?NO=" + NO + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}

/* Show coal industry data */
function coalData(NO) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            noData(json);
            document.getElementById("ind-name").innerHTML = json.data[0].CONTRACTOR;
            document.getElementById("ind-no").innerHTML = json.data[0].NO;
            document.getElementById("ind-location").innerHTML = json.data[0].LOCATION;
            document.getElementById("ind-area").innerHTML = "";
            document.getElementById("ind-dateApp").innerHTML = json.data[0].AWARDED;
            document.getElementById("ind-dateExp").innerHTML = "";
            document.getElementById("ind-status").innerHTML = "";
            openText("industry/desc/coal.txt");
            sidebar.open('industries');
        }
    };
    var url = "phpfiles/coalClick.php?NO=" + NO + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}

/* Show habitat information */
// function populateHabitatFields(muni_name) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function ()
//     {
//         if(xhttp.readyState == 4 && xhttp.status == 200)
//         {
//             var json = JSON.parse(xhttp.responseText);
//             var population = 0;

//             for(var i=0; i<json.data2.length; i++) {
//                 population = population + parseInt(json.data2[i].pop2015);
//             }
//             document.getElementById("region").innerHTML = json.data[0].region;
//             document.getElementById("psgcreg").innerHTML = json.data[0].psgc_reg;
//             document.getElementById("province").innerHTML = json.data[0].prov_name;
//             document.getElementById("psgcprov").innerHTML = json.data[0].psgc_prov;
//             document.getElementById("site").innerHTML = json.data[0].site;
//             document.getElementById("nomun").innerHTML = json.data[0].num_muni;
//             document.getElementById("pop15").innerHTML = population;
//             document.getElementById("ic").innerHTML = json.data[0].inc_class;
//             document.getElementById("nobar").innerHTML = json.data[0].num_brgy;
//             document.getElementById("area").innerHTML = json.data[0].area + " ha";
//         }
//     };

//     var url = "phpfiles/provinceClick.php?prov_name=" + muni_name + "&id=" + Math.random();
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }

function stormPointsInfo(LOC_NAME) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function ()
    {
        if(xhttp.readyState == 4 && xhttp.status == 200)
        {
            var json = JSON.parse(xhttp.responseText);
            noData(json);
            document.getElementById("storm-region").innerHTML = feature.properties.REGION;
            document.getElementById("storm-province").innerHTML = feature.properties.PROV;
            document.getElementById("storm-period").innerHTML = feature.properties.PERIOD;
            document.getElementById("storm-year").innerHTML = feature.properties.YEAR
            document.getElementById("storm-datetime").innerHTML = feature.properties.YYYYMMDDHH;
            document.getElementById("storm-locname").innerHTML = feature.properties.LOC_NAME;
            document.getElementById("storm-intlname").innerHTML = feature.properties.INTL_NAME;
            document.getElementById("storm-nature").innerHTML = feature.properties.NATURE;
            document.getElementById("storm-wind").innerHTML = feature.properties.JMA_WIND;
            document.getElementById("storm-press").innerHTML = feature.properties.JMA_PRES;
            // document.getElementById("storm-region").innerHTML = json.data[0].REGION;
            // document.getElementById("storm-province").innerHTML = json.data[0].PROV;
            // document.getElementById("storm-period").innerHTML = json.data[0].PERIOD;
            // document.getElementById("storm-year").innerHTML = json.data[0].YEAR
            // document.getElementById("storm-datetime").innerHTML = json.data[0].YYYYMMDDHH;
            // document.getElementById("storm-locname").innerHTML = json.data[0].LOC_NAME;
            // document.getElementById("storm-intlname").innerHTML = json.data[0].INTL_NAME;
            // document.getElementById("storm-nature").innerHTML = json.data[0].NATURE;
            // document.getElementById("storm-wind").innerHTML = json.data[0].JTWC_WIND;
            // document.getElementById("storm-press").innerHTML = json.data[0].JTWC_PRES;
            sidebar.open('enviFac');
        }
    };
    var url = "phpfiles/stormClick.php?LOC_NAME=" + LOC_NAME + "&id=" + Math.random;
    xhttp.open("GET", url, true);
    xhttp.send(); 
}

function arrasPopupContent(json) {
    /* Build an array for pop-up table contents */
    var content = new Array();
    for (var i = 0; i < json.data.length; i++) {
       content.push(json.data[i].municity,json.data[i].date, json.data[i].classUrl, json.data[i].habitatUrl);
       //alert(content);
    }
    var dvTable = document.getElementById("dvTable");
    for (var i = 0; i < json.data.length; i++) {
       var row = dvTable.insertRow(1);
       var cell0 = row.insertCell(0);
       var cell1 = row.insertCell(1);
       var cell2 = row.insertCell(2);
       var classFileName = '"'+json.data[i].municity+"_"+json.data[i].date+"_Classification_Map"+'"';
       var habitFileName = '"'+json.data[i].municity+"_"+json.data[i].date+"_Habitat_Map"+'"';
       var classUrl = '"'+json.data[i].classUrl+'"';
       var habitUrl = '"'+json.data[i].habitatUrl+'"';
       cell0.innerHTML = json.data[i].date;
       //Check if html link contains a file, if null then hide donwload link
       if (json.data[i].classUrl == null) {
         cell1.innerHTML = "no data"; 
       }
       else{
         cell1.innerHTML = "<a id='arrasClassi' href="+classUrl+" download="+classFileName+">Download</a>"; 
       }
       if (json.data[i].habitatUrl == null) {
         cell2.innerHTML = "no data";
       }
       else{
         cell2.innerHTML = "<a id='arrasHabitat' href="+habitUrl+" download="+habitFileName+">Download</a>"; 
       }
    }   
}