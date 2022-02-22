


/*Add Land Cover overlays (14 layers)*/
var annualCrop = new L.LayerGroup();
var builtup = new L.LayerGroup();
var closedForest = new L.LayerGroup();
var fallow = new L.LayerGroup();
var fishpond = new L.LayerGroup();
var grassland = new L.LayerGroup();
var inlandWater = new L.LayerGroup();
var mgrvForest = new L.LayerGroup();
var swamp = new L.LayerGroup();
var openBarren = new L.LayerGroup();
var openForest = new L.LayerGroup();
var perennialCrop = new L.LayerGroup();
var shrubs = new L.LayerGroup();
var woodedGrassland = new L.LayerGroup();

annualCrop = L.tileLayer('tileserver/tileserver.php?/index.json?/annualcrop/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
  //attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

builtup = L.tileLayer('tileserver/tileserver.php?/index.json?/builtup/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

closedForest = L.tileLayer('tileserver/tileserver.php?/index.json?/closedForest/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

fallow = L.tileLayer('tileserver/tileserver.php?/index.json?/fallow/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

fishpond = L.tileLayer('tileserver/tileserver.php?/index.json?/fishpond/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

grassland = L.tileLayer('tileserver/tileserver.php?/index.json?/grassland/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

inlandWater = L.tileLayer('tileserver/tileserver.php?/index.json?/inlandWater/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

mgrvForest = L.tileLayer('tileserver/tileserver.php?/index.json?/mgrvForest/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

openBarren = L.tileLayer('tileserver/tileserver.php?/index.json?/openBarren/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

openForest = L.tileLayer('tileserver/tileserver.php?/index.json?/openForest/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

perennialCrop = L.tileLayer('tileserver/tileserver.php?/index.json?/perennialCrop/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

shrubs = L.tileLayer('tileserver/tileserver.php?/index.json?/shrubs/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

swamp = L.tileLayer('tileserver/tileserver.php?/index.json?/swamp/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});

woodedGrassland = L.tileLayer('tileserver/tileserver.php?/index.json?/woodedGrassland/{z}/{x}/{y}.png', 
{
  maxZoom: 10,
  minZoom: 2
});