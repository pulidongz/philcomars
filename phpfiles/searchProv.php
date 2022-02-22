
<?php
  require 'connect.php';
  $prov_name = $_GET['prov_name'];
  // $sql = "SELECT region.region_name, province.* FROM region RIGHT JOIN province ON region.region_ID = province.region_ID WHERE province_PSGC = '$prov_id'";
  $sql = "SELECT * FROM province WHERE '$prov_name' LIKE prov_name";
  $row = $dbo->prepare($sql);
  $row->execute();
 
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
  
?>
