
<?php
  require 'connect.php';
  $LOC_NAME = $_GET['LOC_NAME'];

  $sql = "SELECT * FROM stormpoints WHERE LOC_NAME = '$LOC_NAME'";

  $row = $dbo->prepare($sql);
  $row->execute();
  $result=$row->fetchAll(PDO::FETCH_ASSOC);

  $myJSON = json_encode(array('data'=>$result));
  echo $myJSON;
?>