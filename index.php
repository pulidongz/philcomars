<html>
    <head>
        <title>PhilCoMaRS</title>

        <!--JS Scripts-->
        <!--Leaflet version 0.7.7-->
        <script src="leaflet/js/7/leaflet-src.js"></script>
        <!--JQuery-->
        <script src="leaflet/js/jquery-3.1.1.min.js"></script>
        <script src="leaflet/js/JQueryUI.js"></script>
        <!--Bootstrap Poppers-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
        <!--Bootstrap-->
        <script src="leaflet/js/bootstrap.js"></script>
        <!--Sidebar-->
        <script src="leaflet/js/leaflet-sidebar.js"></script>
        <!--Panel Layer-->
        <script src="leaflet/js/leaflet-panel-layers.src.js"></script>
        <!--Beautify Icons-->
        <script src="leaflet/js/leaflet-beautify-marker-icon.js"></script>
        <!--Minimap-->
        <script src="leaflet/js/Control.MiniMap.js"></script>
        <!--Charts-->
        <script src="leaflet/js/amcharts.js"></script>
        <script src="leaflet/js/serial.js"></script>
        <script src="leaflet/export/export.min.js"></script>
        <script src="leaflet/js/light.js"></script>
        <!--Marker Cluster-->
        <script type='text/javascript' src='http://cdnjs.cloudflare.com/ajax/libs/leaflet.markercluster/0.4.0/leaflet.markercluster.js'></script>
        <script src="https://cdn.rawgit.com/ghybs/Leaflet.FeatureGroup.SubGroup/43fc6b39fa31018490c7ce52d24e760d903ed879/leaflet.featuregroup.subgroup-src.js"></script>
        <!--Choropleth-->
        <script src="leaflet/js/choropleth.js"></script>
        <!--Custom Slider-->
        <script src="leaflet/js/jquery-ui-slider-pips.js"></script>
        <!-- Intro JS script-->
        <script src="leaflet/js/intro.js"></script>
        <!-- Mouse Position Lon Lat Indicator -->
        <script src="leaflet/js/MousePosition.js"></script>
        <!-- Leaflet scale display -->
        <script src="leaflet/js/leaflet.GraphicScale.js"></script>
        <!-- Screenshot -->
        <script src="leaflet/js/html2canvas.min.js"></script>
        <!-- Font-awesome cdn link -->
        <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js"></script>
        <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/v4-shims.js"></script>

        
        <!--CSS Scripts-->
        <!--JQueryUI css-->
        <link rel="stylesheet" href="leaflet/css/JQueryUI.css"/>
        <!--Leaflet version 0.7.7-->
        <link rel="stylesheet" href="leaflet/css/7/leaflet.css"/>
        <!--Bootstrap-->
        <link rel="stylesheet" href="leaflet/css/bootstrap.css"/>
        <link rel="stylesheet" href="leaflet/css/bootstrap-responsive.min.css">
        <!--Sidebar-->
        <link rel="stylesheet" href="leaflet/css/leaflet-sidebar.css"/>
        <!--Panel Layer-->
        <link rel="stylesheet" href="leaflet/css/leaflet-panel-layers.src.css"/>
        <link rel="stylesheet" href="leaflet/css/panelLayer/dist/icons.css" />
        <link rel="stylesheet" href="leaflet/css/panelLayer/dist/style.css" />
        <!--Font Awesome-->
        <link rel="stylesheet" href="leaflet/css/font-awesome.min.css"/>
        <!--Own CSS-->
        <link rel="stylesheet" href="cssfiles/philcomars-css.css"/>
        <!--Minimap-->
        <link rel="stylesheet" href="leaflet/css/Control.MiniMap.css">
        <!--Charts-->
        <link rel="stylesheet" href="leaflet/css/export.css">
        <!--Marker Cluster-->
        <link rel="stylesheet" href="leaflet/css/MarkerCluster.Default.css">
        <!-- IntroJS css -->
        <link rel="stylesheet" href="leaflet/css/introjs.css">
        <!-- Custom Slider css -->
        <link rel="stylesheet" href="leaflet/css/jquery-ui-slider-pips.css">
        <link rel="stylesheet" type="text/css" href="cssfiles/sliderStyle.css">
         <!-- Leaflet Graphic Scale Display -->
         <link rel="stylesheet" type="text/css" href="leaflet/css/Leaflet.GraphicScale.css">
        
    </head>

    <body>
        <!-- Modal -->
        <div class="modal fade" id="overlayWarning" tabindex="-1" role="dialog" aria-labelledby="examplemodallabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="overlayWarningLabel">Warning!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>Remove all map overlays and information on the sidebar?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onclick="removeOverlays()" data-dismiss="modal">OK</button>
                    </div>
                </div>
            </div>
        </div>

        <div id="map">
            <div class="btncontainer">
                <!-- <button type="button" class="btn btn-primary" onclick="Screenshot()">SH</button> -->
                <button type="button" class="btn btn-primary" onclick="HowToUse()">How To?</button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#overlayWarning">Remove All</button>
            </div>

            <!--Sidebar Div-->
            <div id="sidebar" class="sidebar collapsed">
                <!--Navigation Tabs-->
                <div class="sidebar-tabs">
                    <ul role="tablist">
                        <li class="search-tab"><a href="#search" role="tab"><i class="fa fa-search" title="Search"></i></a></li>
                        <li class="info-tab"><a href="#information" role="tab"><i class="fas fa-chart-bar" title="Site Information"></i></a></li>
                        <li class="coralmang-tab"><a href="#coralsMangroves" role="tab"><i class="fa fa-envira" title="Habitat Information"></i></a></li>
                        <li class="landseaCover-tab"><a href="#landseaCover" role="tab"><i class="fa fa-globe" title="Land - Sea Cover"></i></a></li>
                        <li class="stressors-tab"><a href="#stressors" role="tab"><i class="fa fa-superpowers" title="Physical Stressors"></i></a></li>
                        <li class="industry-tab"><a href="#industries" role="tab"><i class="fa fa-industry" title="Industries Information"></i></a></li>
                        <li class="home-tab"><a href="#home" role="tab"><i class="fas fa-info-circle" title="Site Details"></i></a></li>
                        
                        <!-- <li><a href="#legends" role="tab"><i class="fa fa-tags" title="Legends"></i></a></li> -->
                    </ul>
                </div>

                <!-- Tab panes -->
                <div class="sidebar-content">
                    <div class="sidebar-pane" id="home">
                        <h1 class="sidebar-header">SITE INFORMATION<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>
                        <br><br>
                        <ul class="nav nav-tabs" role="tablist" align="center">
                            <li class="nav-item active">
                                <a class="nav-link active" data-toggle="tab" href="#home-tab-about">About</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#home-tab-components">Components</a>
                            </li> -->
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#home-tab-data">Data</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#home-tab-metadata">Metadata</a>
                            </li>
                            <!-- <li class="nav-item">
                                <a class="nav-link" data-toggle="tab" href="#home-tab-contact">Contact Us</a>
                            </li> -->
                        </ul>
                        
                        <div class="tab-content" align="center">
                            <div id="home-tab-about" class="tab-pane fade in active">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>About the Project</center></b></h3>  
                                </div>
                                <br>
                                <p>The Philippine Coral Reef and Mangrove Remote Sensing (Phil-CoMaRS) Database is a platform that combines geographic visualization and query functions in an interactive map that shows the location and extent of mangrove and coral cover in the Philippines. It provides a multi-scale and multi-temporal view of marine habitat data across the country during periods of mass coral bleaching in the last three decades. It also features municipal-level statistics and site-specific field survey results. Users can choose from a collection of environmental and socio-economic map layers to overlay with temporal habitat maps in exploring the patterns of their distribution across space and time. By making marine temporal data readily accessible to resource managers at the regional and national level, Phil-CoMaRS aims to promote collaborative and evidence-based decision making for marine and coastal management in the Philippines.</p>
                            </div>

                            <div id="home-tab-components" class="tab-pane fade">
                                <h3>Components</h3>
                                <br>
                                <p>The Philippine Coral Reef and Mangrove Remote Sensing (Phil-CoMaRS) Project is a subcomponent of the Coastal Assessment for Rehabilitation Enhancement: Capability Development and Resiliency of EcoSystems (CARE-CaDRES) Project of the Department of Environment and Natural Resources. CARE-CaDRES is managed and administered by the Biodiversity Management Bureau under the Coastal and Marine Ecosystems Management Program (CMEMP).</p>

                                <p>The main objective of the Phil-CoMaRS Project is to produce a map-based interactive database consisting of nationwide, multi-temporal maps of coral cover and mangrove areas that were derived from the analysis of multi-temporal satellite images. Data on socio-economic and physical factors that potentially affect these habitats were also added to enhance the database’s research applications.  Site-specific assessment of these habitats in Palawan, Romblon, Surigao Del Sur, the Verde Island Passage (VIP) Triangle, and Zambales were also included in the database.</p>

                                <br>
                                <p>Other objectives of the project are:</p>
                                <p>1. To conduct a rapid assessment of benthic cover,</p>
                                <P>2. To map out the distribution of coral reefs in the country and their temporal changes,</P>
                                <p>3. To assess the coral reefs and coral communities in the study sites,</p>
                                <p>4. To undertake mangrove assessment and mapping, and </p>
                                <p>5. To determine the timing and extent of anomalies of potential parameters that likely affect coral reefs.</p>

                                <br>
                                <p>In line with the ultimate goal of the CARE-CaDRES Project that is to provide science-based input to long-term sustainable management of the coastal and marine ecosystems, the Phil-CoMaRS database was designed and developed for the use of BMB-DENR as a management support tool. Knowledge gathered through the CARE-CaDRES Project is envisioned to provide input for the enhancement of national food security, to improve community engagement in terms of sustainable livelihood, and to identify in existing policies to better harmonize and integrate national environmental management efforts.</p>

                                <br>
                                <h4><strong>Project Leaders</strong></h4>
                                <br>
                                <table align="center" id="socio-table" class="socio-table">
                                    <tr>
                                        <th class="component-header"><strong>Study Leaders</strong></th>
                                        <th class="component-header"><strong>Component<strong></th>
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Ariel Blanco</strong> 
                                            <br>UPD Geodetic Engineering
                                            <br><br><strong>Dr. Nathan Bantayan</strong> 
                                            <br>UPLB College of Forestry and Natural Resources</td>
                                        <td class="component-content">Mapping and detailed assessment of mangrove</td>  
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Laura David (Principal Project Leader)</strong></td>
                                        <td class="component-content">Analysis of physical stressors</td>
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Wilfredo Licuanan</strong>
                                            <br>DLSU Br. Alfred Shields Marine Station
                                            <br><br><strong>Victor Ticzon</strong>
                                            <br>UPLB Institute of Biological Sciences</td>
                                        <td class="component-content">Detailed coral reef assessment</td>
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Ma. Josefa Pante</strong>
                                            <br>UPD Marine Science Institute</td>
                                        <td class="component-content">GIS and Database Development (with Dr. David as co-study leader)</td>
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Gay Jane Perez</strong>
                                            <br>UPD Institute for Environmental Science and Meteorology</td>
                                        <td class="component-content">Mapping of coral reef</td>
                                    </tr>
                                    <tr>
                                        <td class="component-content"><strong>Dr. Maricor Soriano</strong>
                                            <br>UPD National Institute of Physics</td>
                                        <td class="component-content">Rapid assessment of benthic cover</td>
                                    </tr>
                                </table>
                            
                            </div>

                            <div id="home-tab-data" class="tab-pane fade">
                                <br>
                                <p>Available data that can be accessed from the website:</p>
                                <img src="images/home/data.png" style="width: 100%; height:350px;">
                                <br><br>
                                <p><strong><h4>Habitat</h4></strong></p>
                                <p>Knowing the extent of our marine habitats can help us identify scientific, socio-economic, and cultural priorities to maximize the benefits of ecosystem goods and services. The ability to visualize how these features change through time enables one to identify which areas are more more vulnerable or impacted than others.</p>

                                <p>The database primarily highlights habitat maps that comprise of areas of coral, mangrove and aquaculture extent across the different time periods. These data are provided as polygon layers which can be viewed using the slider function for selected cities and municipalities in the country. Each time period corresponds to pre- and post-coral bleaching events:</p>
                                
                                <p>1. First Period (Year 1): Pre-1998</p>
                                <p>2. Second Period (Year 2): Post-1998</p>
                                <p>3. Third Period (Year 3): Post-2010</p>
                                <p>4. Fourth Period (Year 4): Post-2016</p>

                                <p>Information on habitat area (in hectares) per municipality and province can also be retrieved as graphs or attribute data.</p>

                                <br>
                                <p><strong><h4>Physical Factors</h4></strong></p>
                                <p>Recognizing the biophysical factors which affect our coastal and marine ecosystems can helps us understand our dynamic marine environment. These factors can be provide information to support short-term and long-term actions to help us monitor and prepare for oceanographic and atmospheric changes.</p>

                                <p>The database provides biophysical factors which can be potential stressors to marine ecosystems. <strong>Annual sea surface temperature (SST), photosynthentic active radiation (PAR), and surface wind (SA) anomalies</strong> are provided as polygon layers and graphs on a nationwide scale. <strong>Storm track and sediment plume data</strong> are provided as polygon layers for selected sites.</p>

                                <br>
                                <p><strong><h4>Socioeconomic Statistics</h4></strong></p>
                                <p>Coastal development and other human activities have constantly shaped our use of and behavior toward the marine environment. Knowing the characteristics of the population that bring about both positive and negative impacts to the ecosystems can assist us in planning and improving resource management.</p>

                                <p>The database includes basic socio-economic information of select cities and municipalities in the country. <strong>Population and population growth rate, income class, poverty incidence, dependency ratio and number of fishers</strong> are available at the municipal level. These data appear as map attributes and are also presented as choropleth maps. A coloring scheme is used to show levels of values to aid the users in visualizing how cities/municipalities within a province compare with each other in terms of each of the socioeconomic indicators.</p>

                                <br>
                                <p><strong><h4>Industries</h4></strong></p>
                                <p>Locations of industries whose activities could potentially impact our coastal marine habitats are also available in this database as map layers. These include point locations of <strong>regional and municipal fish ports</strong> as well as polygon layers showing the extent of <strong>coal, petroleum and geothermal contracts and of mining agreements</strong>. Each contract or agreement includes the area (in hectares), operator and status information, while regional fish ports include data on fish unloading volume.</p>

                                <br>
                                <p><strong><h4>Protected Areas</h4></strong></p>
                                <p>Identifying currently protected areas in relation to habitat extent can help inform and improve monitoring and evaluation programs. Likewise, this information can provide insight for marine resource managers on both a national and local level.</p>

                                <p>The database provides polygon layers and point locations of marine protected areas (MPAs) on a nationwide scale. These include MPAs that are both under local or community-based management and under the National Integrated Protected Areas Systems (NIPAS) Act of 1992.</p>

                                <br>
                                <p><strong><h4>Field Assessment Data</h4></strong></p>
                                <p><i>In situ</i> validation of RS data were conducted in sites selected by DENR. These sites are:</p>

                                <p>1. Zambales:  Municipalities of Palauig (Brgy. Garreta), Iba (Brgy. Lipay-Dingin-Panibuatan)</p>
                                <p>2. Occidental Mindoro: Municipalities of Lubang, Looc; Facing SW of Golo Island (Brgy Bulacan and Brgy. Talaotao); Facing SW and E of Lubang Island [Brgy. Binakas SE until Barangay Bonbon (Poblacion)]; Guitna Bay (Looc Municipality); Ambil Island (Looc Municipality)</p>
                                <p>3. Surigao del Sur: Municipalities of Cortes, Cantilan, Carrascal, Bislig, Hinatuan, San Agustin, Marihatag</p>
                                <p>4. Palawan (facing the West Philippine Sea): Municipalities of Quezon, Rizal</p>

                                <p>The output of this validation are presented as posters that can be downloaded.</p>
                            </div>

                            <div id="home-tab-metadata" class="tab-pane fade">
                                <br>List of downloadable metadata:
                                <br><br>
                                <?php
                                    include 'phpfiles/downloadMetadata.php';
                                ?>
                            </div>

                            <div id="home-tab-contact" class="tab-pane fade">
                                <h3>Contact Us</h3>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-pane" id="information">
                        <h1 class="sidebar-header">SITE INFORMATION<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>
                        <br>
                        <ul class="nav nav-tabs" role="tablist" align="center">
                            <li class="nav-item active" id="socioecon-tab">
                                <a class="nav-link active" data-toggle="tab" href="#information-tab-socioecon">Socioeconomic</a>
                            </li>
                            <li class="nav-item" id="ssta-tab"> 
                                <a class="nav-link" data-toggle="tab" href="#information-tab-SST">SSTA</a>
                            </li>
                            <li class="nav-item" id="para-tab">
                                <a class="nav-link" data-toggle="tab" href="#information-tab-PARA">PARA</a>
                            </li>
                            <li class="nav-item" id="wsa-tab">
                                <a class="nav-link" data-toggle="tab" href="#information-tab-WSA">WSA</a>
                            </li>
                        </ul>

                        <div class="tab-content">
                            <div id="information-tab-socioecon" class="tab-pane fade in active">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Socioeconomic Data</center></b></h3>  
                                </div>

                                <br>
                                <p>Demographic and socioeconomic data are integral in management planning. When presented as maps, they provide a spatial snapshot of past or existing human conditions that characterize places. Mapping social data such as poverty incidence allows resource planners to identify disadvantaged communities, while data on the income classification of municipalities and cities can provide them an initial impression of the financial capacities of local government units. These along with eleven (11) other social variables drawn from a variety of official reports and datasets by several government institutions are integrated in this database.</p>

                                <br>
                                <table align="center" id="socio-table" class="socio-table">
                                    <tr>
                                        <td class="column-header"><strong>Region</strong></td>
                                        <td class="column-content" id="region"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Province</strong></td>
                                        <td class="column-content" id="province"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Municipality/City</strong></td>
                                        <td class="column-content" id="municity"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Area</strong></td>
                                        <td class="column-content" id="area"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>No. of Municipalities</strong></td>
                                        <td class="column-content" id="nomun"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>No. of Barangays</strong></td>
                                        <td class="column-content" id="nobar"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Population</strong></td>
                                        <td class="column-content" id="pop15"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Income Class</strong></td>
                                        <td class="column-content" id="ic"></td>
                                    </tr>
                                    
                                    <tr>
                                        <td class="column-header"><strong>No. of Fishers</strong></td>
                                        <td class="column-content" id="nofish"></td>
                                    </tr>
                                </table>
                                
                                <div class="choro" style="display: none;">
                                    <br>
                                    <div class="dropdown" align="center">
                                        <select id="chorodropdown" align="center" id="choose-choropleth" class="dropbox" onchange="choropleth(this.value)">
                                            <option value="0">Choose Choropleth Map</option>
                                            <option value="1">Population</option>
                                            <option value="2">Income Class</option>
                                        </select>
                                    </div>

                                    <br><br>
                                    <div id="choropleth-legend1" class="legend-content">
                                        <legend>Legend:</legend>
                                        <div class="box pop1" id="pop-box1"><div class="legend-note" id="legend1"></div></div>
                                        <div class="box pop2" id="pop-box2"><div class="legend-note" id="legend2"></div></div>
                                        <div class="box pop3" id="pop-box3"><div class="legend-note" id="legend3"></div></div>
                                        <div class="box pop4" id="pop-box4"><div class="legend-note" id="legend4"></div></div>
                                        <div class="box pop5" id="pop-box5"><div class="legend-note" id="legend5"></div></div>
                                    
                                        <fieldset id="notes" style="fontt-size: 10px; font-style: italic; padding: 20px 20px;">
                                            <br>Notes:
                                            <br>1. Population data as of 2015
                                            <br>2. Quantile Classification Method was used for the determination of population interval
                                        </fieldset>
                                    </div>
                                    <div id="choropleth-legend2" class="legend-content">
                                        <legend>Legend:</legend>
                                        <div class="box icpop1" id="ic-box1"><div class="legend-note" id="iclegend1">Below P35M</div></div>
                                        <div class="box icpop2" id="ic-box2"><div class="legend-note" id="iclegend2">Between P35M and P80M</div></div>
                                        <div class="box icpop3" id="ic-box3"><div class="legend-note" id="iclegend3">More than 80M</div></div>
                                    </div>
                                </div>
                            </div>

                            <div id="information-tab-SST" class="tab-pane fade">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Sea Surface Temperature Anomaly</center></b></h3>  
                                </div>
                                <br>
                                <p>Anomalous increases in sea temperature have detrimental effect on marine ecosystems. Episodes of intense positive sea surface temperature anomalies, for instance, have been observed as a driving factor to mass coral bleaching occurrences. Thermally-induced mass coral bleaching has been one of the reasons for the global decline of coral reefs.</p>
                                <p><center><i>*Graph only provided for province sites</i></center></p>
                                <div id="ssta-chart" class="image-chart"></div>
                                <div id ="sliderhere">
                                    <br>
                                    <h5 id="ssta-slider-label" style="margin: auto; display: none;"><strong>Annual National SST Anomaly</strong></h5>
                                    <br>
                                    <div id="ssta-Slider" class="slider"></div>
                                </div>  
                            </div>

                            <div id="information-tab-PARA" class="tab-pane fade">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Photosynthetically Active Radiation Anomaly</center></b></h3>  
                                </div>
                                <br>
                                <p>Photosynthetically active radiation (PAR) is vital in the coral symbionts’ photosynthetic process. However, can be detrimental to the coral-algal symbiosis when increased beyond tolerable limits. Anomalously high PAR has also been shown to be a critical parameter in coral bleaching.</p>

                                <p><center><i>*Graph only provided for province sites</i></center></p>
                                <div id="para-chart" class="image-chart"></div>
                            </div>

                            <div id="information-tab-WSA" class="tab-pane fade">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Surface Wind Speed Anomaly</center></b></h3>  
                                </div>
                                <br>
                                <p>Wind affects the mixing of the water column. A condition of little to no wind would indicate less mixing that could likely lead to a build-up of warming in the upper layers of the water column. Anomalously low surface wind is one of the factors that favors the occurrence of coral bleaching. On the other hand, strong winds could lead to resuspension of sediments and even cause coral reef damage on extreme events.</p>

                                <p><center><i>*Graph only provided for province sites</i></center></p>
                                <div id="wsa-chart" class="image-chart"></div>
                                <!-- <div id="modal3" class="modal">
                                    <span class="close">&times;</span>
                                    <div class="modal-content">
                                        <div id="swa-chart-modal" class="image-chart-modal"></div>
                                    </div>
                                </div> -->
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-pane" id="industries">
                        <h1 class="sidebar-header">INDUSTRIES<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>

                        <div class="sidebar-content-header">
                            <h3 class="content-header"><b><center>Industries Data</center></b></h3>  
                        </div>
                        <br>

                        <p>Developmental activities that harness resources from the environment can potentially affect the ecology of adjacent habitats. Knowing the location and extent of resource exploration and development can help resource managers identify areas for rigorous monitoring. Data on extractive activities may also serve as input for appropriating management strategies that support sustainable use in areas with known or potential mineral or energy sources.</p>

                        <div class="tab-content">
                            <div class="tab-pane fade in active">
                                <strong><h3 id="industry-heading"></h3></strong>
                                <br>
                                <table align="center" id="socio-table" class="socio-table">
                                    <tr>
                                        <td class="column-header"><strong>Name</strong></td>
                                        <td class="column-content" id="ind-name"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>No.</strong></td>
                                        <td class="column-content" id="ind-no"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Location</strong></td>
                                        <td class="column-content" id="ind-location"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Area</strong></td>
                                        <td class="column-content" id="ind-area"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Date Approved</strong></td>
                                        <td class="column-content" id="ind-dateApp"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Date of Expiry</strong></td>
                                        <td class="column-content" id="ind-dateExp"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Status</strong></td>
                                        <td class="column-content" id="ind-status"></td>
                                    </tr>
                                </table>
                            </div>
                            <br>
                            <div id="industry-desc"></div>
                        </div>
                        
                    </div>

                    
                    <div class="sidebar-pane" id="coralsMangroves">
                        <h1 class="sidebar-header">HABITAT<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>

                        <div class="sidebar-content-header">
                            <h3 class="content-header"><b><center>Corals and Mangroves</center></b></h3>  
                        </div>
                        <br>

                        <p>Coral reefs and mangroves are essential coastal and marine habitats that provide a variety of ecosystem services such as food security, livelihood, coastal protection, climate regulation, and recreation. However, these habitats are also threatened by both natural and man-made stressors. The changes our coral reefs and mangroves undergo as a result of these stressors call for sustainable management and conservation of these habitats to help us maximize the benefits of our coastal and marine resources.</p>

                        <br>
                        <table align="center" id="habitat-table" class="socio-table">
                            <tr>
                                <td class="column-header"><strong>Region</strong></td>
                                <td class="column-content" id="hab-region"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Province</strong></td>
                                <td class="column-content" id="hab-province"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Municipality/City</strong></td>
                                <td class="column-content" id="hab-municity"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Coral Area</strong></td>
                                <td class="column-content" id="coral-area"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Coral Description</strong></td>
                                <td class="column-content" id="coral-descript"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Mangrove Area</strong></td>
                                <td class="column-content" id="mangrove-area"></td>
                            </tr>
                            <tr>
                                <td class="column-header"><strong>Mangrove Description</strong></td>
                                <td class="column-content" id="mangrove-descript"></td>
                            </tr>
                        </table>
                        <!-- Start of div for sliders -->
                        <br>
                        <p style="text-align: center; font-size: 11px">
                          <i>*Enable Corals or/and Mangroves layers to view slider</i>
                        </p>
                        <br>
                        <div id ="sliderhere">
                            <br>
                            <h5 id="coral-label" style="margin: auto; display: none;"><strong>Coral Period:</strong></h5>
                            <br>
                            <div id="coralSlider" class="slider"></div>
                            <br><br><br>
                            <h5 id="mgrv-label" style="margin: auto; display: none;"><strong>Mangrove Period:</strong></h5>
                            <br>
                            <div id="mgrvSlider" class="slider"></div>
                            <br><br><br>
                        </div>
                        <!-- End of div for sliders -->
                        <!-- <input type="button" id="clearCM" class="btn btn-danger" value="Clear All" onclick="resetHabitatSlider()"> -->
                    </div>  


                    <div class="sidebar-pane" id="stressors">
                        <h1 class="sidebar-header">PHYSICAL STRESSORS<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>
                        <br>

                        <!-- Biophysical Stressors Tablist (nav-tabs) --> 
                        <ul class="nav nav-tabs" role="tablist" align="center">
                            <li class="nav-item active" id="stressors1">
                                <a class="nav-link active" data-toggle="tab" href="#infotab-sedimentplume">Sediment Plume</a>
                            </li>
                            <li class="nav-item" id="stressors2">
                                <a class="nav-link" data-toggle="tab" href="#infotab-stormtrack">Storm Track Point</a>
                            </li>
                        </ul>
                        <!-- Biophysical Stressors Tablist (tab contents) -->

                        <div class="tab-content">
                            <div id="infotab-sedimentplume" class="tab-pane fade in active">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Sediment Plume Data</center></b></h3>  
                                </div>
                                <!-- START OF SEDIMENT PLUME DIV -->
                                <br>
                                <p>Sedimentation (i.e after a storm event) poses a serious threat to coral reefs. Suspended in waters, sediment may result to turbidity in the water column thereby reducing the light necessary for coral growth and metabolism. In excess amounts and periods of chronic exposure, sediments that settle on coral can lead to coral bleaching, disease and even mortality.</p>

                                <br>
                                <p style="font-size: 11px;"><i>*Click on a sediment plume polygon to view plume data and storms per period</i></p>
                                <br>
                                <h5 style="text-align: center; color: #285585;">Sediment Plume Information for Years 1-4</h5>
                                <br>
                                <table align="center" id="sedPlume-table" class="socio-table">
                                    <tr>
                                        <td class="column-header"><strong>Region</strong></td>
                                        <td class="column-content" id="plume-region"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Province</strong></td>
                                        <td class="column-content" id="plume-province"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>LS Date</strong></td>
                                        <td class="column-content" id="plume-lsdate"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Storm Event</strong></td>
                                        <td class="column-content" id="plume-event"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Period</strong></td>
                                        <td class="column-content" id="plume-period"></td>
                                    </tr>
                                </table>
                                <br><br>
                                <div>
                                    <h5 id="plume-label" style="margin: auto; display: none;"><strong>Sediment Plume Period:</strong></h5>
                                    <br><br>
                                    <div id="plumeSlider" class="slider"></div>
                                </div>
                                <br><br><br>
                                <div id="stormByPeriod" align="center"></div>
                        <!-- END OF SEDIMENT PLUME DIV -->
                            </div>

                            <div id="infotab-stormtrack" class="tab-pane fade">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Storm Track Points Data</center></b></h3>  
                                </div>
                                <!-- START OF STORM TRACK (POINT) DIV -->
                                <br>
                                <p>Storms that occurred right before the sediment plume was observed. Selection of the storm track is limited to the availability of a clear satellite image (to derive sediment plume map) after a storm event.</p>

                                <br>
                                <table align="center" id="habitat-table" class="socio-table">
                                    <tr>
                                        <td class="column-header"><strong>Region</strong></td>
                                        <td class="column-content" id="storm-region"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Province</strong></td>
                                        <td class="column-content" id="storm-province"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Period</strong></td>
                                        <td class="column-content" id="storm-period"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Year</strong></td>
                                        <td class="column-content" id="storm-year"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Date and Time</strong></td>
                                        <td class="column-content" id="storm-datetime"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Local Name</strong></td>
                                        <td class="column-content" id="storm-locname"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>International Name</strong></td>
                                        <td class="column-content" id="storm-intlname"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Nature</strong></td>
                                        <td class="column-content" id="storm-nature"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>JMA Wind Speed</strong></td>
                                        <td class="column-content" id="storm-wind"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>JMA Pressure</strong></td>
                                        <td class="column-content" id="storm-press"></td>
                                    </tr>
                                </table>
<!-- 
                                <br><br>
                                <div id="search-storm" class="query"> 
                                    <?php
                                        // include 'phpfiles/searchStormInit.php';
                                    ?>
                                </div>
                                <br>
                                <div class="filter-buttons">
                                    <input type="button" id="clearStorm" class="btn btn-danger" value="Remove" onclick="filterStorm('clear')">
                                    <input type="button" id="filterStorm" class="btn btn-success" value="Filter" onclick="filterStorm('search')">
                                </div> -->
                                <!-- END OF STORM TRACK (POINT) DIV -->
                            </div>
                        </div>                       
                    </div>
<!-- START OF AQUACULTURE WINDOW -->
                    <div class="sidebar-pane" id="landseaCover">
                        <h1 class="sidebar-header">LAND - SEA COVER<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>
                        <!-- Physical Stressors Tablist (nav-tabs) -->
                        <br>
                        <ul class="nav nav-tabs" role="tablist" align="center">
                            <li class="nav-item active" id="aquaculture-tab">
                                <a class="nav-link active" data-toggle="tab" href="#infotab-aquaculture">Aquaculture</a>
                            </li>
                            <li class="nav-item" id="landcover-tab">
                                <a class="nav-link" data-toggle="tab" href="#infotab-landcover">Land Cover</a>
                            </li>
                        </ul>
                        <!-- Land-Sea Cover Tablist (tab contents) -->
                        <div class="tab-content">
                            <div id="infotab-aquaculture" class="tab-pane fade in active">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Aquaculture Data</center></b></h3>  
                                </div>
                                <br>

                                <p>Aquaculture operations are fishery operations which involve raising or culturing aquatic species intended to supplement existing food supply or needs. However, unsustainable practices and the rapid conversion of coastal areas into aquaculture sites can also result in several environmental issues such as the loss of mangrove habitat, polluted water, and the potential to introduce invasive species or disease into the marine environment. There is a need for integrated aquaculture practices to satisfy the increasing demand of fishery resources without compromising the state of the marine environment.</p>

                                <br>
                                <p style="text-align: center; font-size: 11px">
                                  <i >*Enable Aquaculture Layer to view options</i> 
                                </p>
                                <br>

                                <table align="center" id="aquaculture-table" class="socio-table">
                                    <tr>
                                        <td class="column-header"><strong>Region</strong></td>
                                        <td class="column-content" id="aqua-region"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Province</strong></td>
                                        <td class="column-content" id="aqua-province"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Municipality/City</strong></td>
                                        <td class="column-content" id="aqua-municity"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Area</strong></td>
                                        <td class="column-content" id="aqua-area"></td>
                                    </tr>
                                    <tr>
                                        <td class="column-header"><strong>Description</strong></td>
                                        <td class="column-content" id="aqua-descript"></td>
                                    </tr>
                                </table>
                                <div><!-- Start of Aquaculture slider -->
                                  <br>
                                  <h5 id="aqua-label" style="margin: auto; display: none;"><strong>Aquaculture Year:</strong></h5>
                                  <br>
                                  <div id="aquaSlider" class="slider"></div>
                                  <br><br><br>
                                </div><!-- End of Aquaculture slider -->                     
                                <!-- Bootstrap button to clear all displayed information -->
                                <!-- <input type="button" id="clearAC" class="btn btn-danger" value="Clear All" onclick="resetAquaSlider()">  -->
                            </div>
                            <div id="infotab-landcover" class="tab-pane fade">
                                <div class="sidebar-content-header">
                                    <h3 class="content-header"><b><center>Land Cover</center></b></h3>
                                    <br>
                                    <p>Land cover data are useful in visualizing our landscapes using general categories that are relevant to spatial planning, such as cropland, inland water, forest, or built-up.  Much of the interaction taking place between the environment and its human dwellers can be gleaned from the types of land cover that are perceivable at a landscape scale. As such, an indicative map of different land cover types over a geographic area is useful in identifying suitable management approaches to regulate resource use and to further encourage sustainable practices.</p>
                                    <br><p>Land Cover 2010 legends table:</p><br>
                                    <img src="images/landcover2010_legend.PNG" style="width: 50%; height:50%; display: block;margin-left: auto; margin-right: auto;">
                                </div>
                            </div>
                        </div>
                    </div>
<!-- END OF AQUACULTURE WINDOW -->
                    <div class="sidebar-pane" id="search">
                        <h1 class="sidebar-header">SEARCH<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>

                        <br><br>
                        <div id="search-location" class="query"> 
                            <?php
                                include 'phpfiles/searchInit.php';
                            ?>
                        </div>
                        
                        <br><br><br>
                        <div class="filter-buttons">
                            <input type="button" id="submit" class="btn btn-success" value="Search" onclick="submitForm('search')">
                            <input type="button" id="clear" class="btn btn-danger" value="Clear" onclick="submitForm('clear')">
                        </div>
                    </div>


                    <div class="sidebar-pane" id="legends">
                        <h1 class="sidebar-header">Legends<span class="sidebar-close"><i class="fa fa-caret-left fa-2x" title="Collapse Sidebar"></i></span></h1>
                        <br><br>
                        <div class="legbox leg1" style="background-color:rgba(255, 255, 0, 0.3);"><div class="legend-note">EEZ Boundary</div></div>
                        <br>
                        <div class="legbox leg2"><div class="legend-note">Regional/Provincial/Municipal Boundary</div></div>
                        <br>
                        <div class="legbox leg3"><div class="legend-note">Municipal Waters Boundary</div></div>
                        <br>
                        <div class="legbox leg4"><div class="legend-note">Benham, KIG, USUK Boundary</div></div>
                        <br>
                        <div class="legbox leg5"><div class="legend-note">Coral Cover</div></div>
                        <br>
                        <div class="legbox leg6"><div class="legend-note">Mangrove Cover</div></div>
                        <br>
                        <div class="legbox leg7" style="background-color:rgba(176, 58, 46, 0.8);"><div class="legend-note">Province/Municipal Site Boundary</div></div>
                    </div>
                </div>
            </div>
        </div>

        <script type="text/javascript" src="jsfiles/jsonStyles.js"></script>
        
        <script type="text/javascript" src="jsfiles/showInfo.js"></script>
        <script type="text/javascript" src="jsfiles/sedimentStorm.js"></script>
        <script type="text/javascript" src="jsfiles/checkIfSite.js"></script>
        <script type="text/javascript" src="jsfiles/anomaliesCharts.js"></script>
        <script type="text/javascript" src="jsfiles/landCover.js"></script>

        <script type="text/javascript" src="jsfiles/layers.js"></script>
        <script type="text/javascript" src="jsfiles/jsonStyles.js"></script>
        <script type="text/javascript" src="jsfiles/ssta_Layers.js"></script>
        <script type="text/javascript" src="jsfiles/habitatYears.js"></script>
        <script type="text/javascript" src="jsfiles/sliderOnChange.js"></script>
        <script type="text/javascript" src="jsfiles/layerAddRemove.js"></script>
        <script type="text/javascript" src="jsfiles/removeOverlays.js"></script>  

        <script type="text/javascript" src="jsfiles/dropdownOnChange.js"></script>
        <script type="text/javascript" src="jsfiles/search.js"></script>
        <script type="text/javascript" src="jsfiles/choropleth.js"></script> 

        <script type="text/javascript" src="jsfiles/HowToUse.js"></script>
    </body>
</html>