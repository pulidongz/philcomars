/* Dropdown Place onchange functions */
var pass = 0;

/* On Region Change */
// function regChange(regId){
//   if(pass == 1) {
//     map.removeLayer(geojson);
//     pass = 0;
//   }
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (xhttp.readyState == 4 && xhttp.status == 200) {
//       document.getElementById("provDiv").innerHTML = xhttp.responseText;
//     }
//   };
//   var url="phpfiles/dropdownProvince.php?psgc_reg=" + regId + "&id=" + Math.random;
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

/* On Province Change */
function provChange(provId){
  if (geojsonSearch) {
    map.removeLayer(geojsonSearch);
  }
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("munDiv").innerHTML = xhttp.responseText;
      }
  };
  var url="phpfiles/dropdownMuni.php?psgc_prov=" + provId + "&id=" + Math.random;
  xhttp.open("GET", url, true);
  xhttp.send();
}


/* Storm Filter */
// function stormPeriodChange(period){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//       if (xhttp.readyState == 4 && xhttp.status == 200) {
//         document.getElementById("stormProvDiv").innerHTML = xhttp.responseText;
//       }
//   };
//   var url="phpfiles/dropdownStormProv.php?period=" + period + "&id=" + Math.random;
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }

// function stormProvChange(psgc_prov, period){
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//       if (xhttp.readyState == 4 && xhttp.status == 200) {
//         document.getElementById("stormDiv").innerHTML = xhttp.responseText;
//       }
//   };
//   var url="phpfiles/dropdownStorm.php?psgc_prov=" + psgc_prov + "&period=" + period + "&id=" + Math.random;
//   xhttp.open("GET", url, true);
//   xhttp.send();
// }