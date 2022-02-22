<?php
  require 'connect.php';
  $psgc_muni = $_GET['psgc_muni'];

  $sql = "SELECT province.psgc_reg, province.prov_name, province.psgc_prov, province.site, prov_coral.p_area, prov_coral.y1_area, prov_coral.y2_area, prov_coral.y3_area, prov_coral.y4_area, prov_coral.p_geojson, prov_coral.y1_geojson, prov_coral.y2_geojson, prov_coral.y3_geojson, prov_coral.y4_geojson FROM province
INNER JOIN prov_coral ON province.prov_name LIKE prov_coral.prov_name
          WHERE municity.psgc_muni = '$psgc_muni'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $sql3 = "SELECT province.prov_name, anomalies.* FROM municity 
        INNER JOIN province ON municity.psgc_prov = province.psgc_prov 
        INNER JOIN anomalies ON province.psgc_prov = anomalies.psgc_prov
        WHERE municity.psgc_muni = '$psgc_muni'";

  $row3 = $dbo->prepare($sql3);
  $row3->execute();
  $result3=$row3->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result, 'data3'=>$result3));
  echo $myJSON;
?>