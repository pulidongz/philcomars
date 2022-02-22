<?php
  require 'connect.php';
  $stormPeriod = $_GET['period'];
  $stormProv = $_GET['psgc_prov'];

  // $sql = "SELECT DISTINCT * FROM municity WHERE muniCity_ID = '$mun_id'";
  $sql = "SELECT * FROM stormlines
        WHERE period = '$stormPeriod'
        AND psgc_prov = '$stormProv'";

  $row = $dbo->prepare($sql);
  $row->execute();
 
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
  
?>