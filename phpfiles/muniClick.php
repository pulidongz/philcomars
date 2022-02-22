
<?php
  require 'connect.php';
  $psgc_muni = $_GET['psgc_muni'];

  $sql = "SELECT region.reg_name, province.*, municity.* FROM region 
          INNER JOIN province on region.psgc_reg = province.psgc_reg
          INNER JOIN municity on province.psgc_prov = municity.psgc_prov
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

  /* Municity coral query */
  $sql4 = "SELECT region.reg_name, province.psgc_prov, province.prov_name, province.site, municity.psgc_muni, muni_coral.municity, muni_coral.p_area,muni_coral.y1_area, muni_coral.y2_area, muni_coral.y3_area, muni_coral.y4_area, muni_coral.p_geojson, muni_coral.y1_geojson, muni_coral.y2_geojson, muni_coral.y3_geojson, muni_coral.y4_geojson FROM region
    INNER JOIN province ON region.psgc_reg = province.psgc_reg 
    INNER JOIN municity ON province.psgc_prov = municity.psgc_prov
    INNER JOIN muni_coral ON (municity.muni_name LIKE muni_coral.municity AND province.prov_name LIKE muni_coral.prov)
    WHERE municity.psgc_muni = '$psgc_muni'";

  $row4 = $dbo->prepare($sql4);
  $row4->execute();
  $result4=$row4->fetchAll(PDO::FETCH_ASSOC);

  /* Municity mangrove query */
  $sql5 = "SELECT region.reg_name, province.psgc_prov, province.prov_name, province.site, municity.psgc_muni, muni_mgrv.municity, muni_mgrv.p_area, muni_mgrv.y1_area, muni_mgrv.y2_area, muni_mgrv.y3_area, muni_mgrv.y4_area, muni_mgrv.p_geojson, muni_mgrv.y1_geojson, muni_mgrv.y2_geojson, muni_mgrv.y3_geojson, muni_mgrv.y4_geojson FROM region
    INNER JOIN province ON region.psgc_reg = province.psgc_reg 
    INNER JOIN municity ON province.psgc_prov = municity.psgc_prov
    INNER JOIN muni_mgrv ON (municity.muni_name LIKE muni_mgrv.municity AND province.prov_name LIKE muni_mgrv.prov)
    WHERE municity.psgc_muni = '$psgc_muni'";

  $row5 = $dbo->prepare($sql5);
  $row5->execute();
  $result5=$row5->fetchAll(PDO::FETCH_ASSOC);

  /* Municity aquaculture query */
  $sql6 = "SELECT region.reg_name, province.psgc_prov, province.prov_name, province.site, municity.psgc_muni, muni_aqua.municity, muni_aqua.y1_area, muni_aqua.y2_area, muni_aqua.y3_area, muni_aqua.y4_area, muni_aqua.y1_geojson, muni_aqua.y2_geojson, muni_aqua.y3_geojson, muni_aqua.y4_geojson FROM region
    INNER JOIN province ON region.psgc_reg = province.psgc_reg 
    INNER JOIN municity ON province.psgc_prov = municity.psgc_prov
    INNER JOIN muni_aqua ON (municity.muni_name LIKE muni_aqua.municity AND province.prov_name LIKE muni_aqua.prov)
    WHERE municity.psgc_muni = '$psgc_muni'";

  $row6 = $dbo->prepare($sql6);
  $row6->execute();
  $result6=$row6->fetchAll(PDO::FETCH_ASSOC);
  


  $myJSON = json_encode(array('data'=>$result, 'data3'=>$result3, 'coral'=>$result4, 'mgrv'=>$result5, 'aqua'=>$result6));
  echo $myJSON;
?>