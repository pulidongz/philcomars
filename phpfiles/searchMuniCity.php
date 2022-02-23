<?php
  require 'connect.php';
  $psgc_muni = $_GET['psgc_muni'];
  // $sql = "SELECT DISTINCT * FROM municity WHERE muniCity_ID = '$mun_id'";
  $sql = "SELECT region.region_name, province.*, municity.* FROM region 
  			INNER JOIN province ON region.psgc_reg = province.psgc_reg 
  			INNER JOIN municity ON province.psgc_prov = municity.psgc_prov 
  			WHERE psgc_muni = '$psgc_muni'";

  $row = $dbo->prepare($sql);
  $row->execute();
 
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
  
?>