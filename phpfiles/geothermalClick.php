
<?php
  require 'connect.php';
  $NO = $_GET['NO'];

  $sql = "SELECT * FROM geothermal WHERE geothermal.NO = '$NO'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
?>