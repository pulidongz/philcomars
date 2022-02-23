<?php
  require 'connect.php';
  $municity = $_GET['municity'];

  $sql = "SELECT municity, arras.date, classUrl, habitatUrl FROM arras WHERE municity LIKE '$municity'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
?>