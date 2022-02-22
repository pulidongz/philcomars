<?php
  require 'connect.php';
   $stormName = $_GET['loc_name'];
  // $period = $_GET['period'];
 

  $sql = "SELECT DISTINCT * FROM stormlines
          WHERE loc_name = '$stormName'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
?>