<?php
  require 'connect.php';
  $psgc_prov = $_GET['psgc_prov'];

  $sql = "SELECT region.reg_name, province.* FROM region 
          INNER JOIN province on region.psgc_reg = province.psgc_reg
          WHERE province.psgc_prov = '$psgc_prov'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $sql2 = "SELECT province.psgc_prov, municity.pop2015, municity.num_fisher FROM province 
  			INNER JOIN municity ON province.psgc_prov = municity.psgc_prov 
  			WHERE province.psgc_prov = '$psgc_prov'";

  $row2 = $dbo->prepare($sql2);
  $row2->execute();
  $result2=$row2->fetchAll(PDO::FETCH_ASSOC);


  /* Anomalies Chart Data */
  $sql3 = "SELECT province.psgc_prov, province.prov_name, anomalies.* FROM province 
        INNER JOIN anomalies ON province.psgc_prov = anomalies.psgc_prov 
        WHERE province.psgc_prov = '$psgc_prov'";

  $row3 = $dbo->prepare($sql3);
  $row3->execute();
  $result3=$row3->fetchAll(PDO::FETCH_ASSOC);

  /* Provincial coral query */
  $sql4 = "SELECT province.psgc_reg, province.prov_name, province.psgc_prov, province.site, prov_coral.p_area, prov_coral.y1_area, prov_coral.y2_area, prov_coral.y3_area, prov_coral.y4_area, prov_coral.p_geojson, prov_coral.y1_geojson, prov_coral.y2_geojson, prov_coral.y3_geojson, prov_coral.y4_geojson FROM province
        INNER JOIN prov_coral ON province.prov_name LIKE prov_coral.prov_name 
        WHERE province.psgc_prov = '$psgc_prov'";

  $row4 = $dbo->prepare($sql4);
  $row4->execute();
  $result4=$row4->fetchAll(PDO::FETCH_ASSOC);

  /* Provincial mangrove query */
  $sql5 = "SELECT province.psgc_reg, province.prov_name, province.psgc_prov, province.site, prov_mgrv.p_area, prov_mgrv.y1_area, prov_mgrv.y2_area, prov_mgrv.y3_area, prov_mgrv.y4_area, prov_mgrv.p_geojson, prov_mgrv.y1_geojson, prov_mgrv.y2_geojson, prov_mgrv.y3_geojson, prov_mgrv.y4_geojson FROM province
        INNER JOIN prov_mgrv ON province.prov_name LIKE prov_mgrv.prov_name 
        WHERE province.psgc_prov = '$psgc_prov'";

  $row5 = $dbo->prepare($sql5);
  $row5->execute();
  $result5=$row5->fetchAll(PDO::FETCH_ASSOC);

  /* Provincial aquaculture query */
  $sql6 = "SELECT province.psgc_reg, province.prov_name, province.psgc_prov, province.site, prov_aqua.y1_area, prov_aqua.y2_area, prov_aqua.y3_area, prov_aqua.y4_area, prov_aqua.y1_geojson, prov_aqua.y2_geojson, prov_aqua.y3_geojson, prov_aqua.y4_geojson FROM province
        INNER JOIN prov_aqua ON province.prov_name LIKE prov_aqua.prov_name 
        WHERE province.psgc_prov = '$psgc_prov'";

  $row6 = $dbo->prepare($sql6);
  $row6->execute();
  $result6=$row6->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result, 'data2'=>$result2, 'data3'=>$result3, 'coral'=>$result4, 'mgrv'=>$result5, 'aqua'=>$result6));
  echo $myJSON;
?>