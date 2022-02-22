<?php
  require 'connect.php';
   $province = $_GET['prov'];
  $period = $_GET['period'];
 

  $sql = "SELECT DISTINCT * FROM stormlines
        WHERE period = '$period'
        AND prov = '$province'";

  $result = $dbo->prepare($sql);
  $result->execute();
  // $result=$row->fetchAll(PDO::FETCH_ASSOC);

  // $ctr = 0;
  echo "<legend id='storm-legend'>Select Storm</legend>";
  echo "<select id='stormOpt' align='center' class='dropbox' name='storm' onchange='selectStorm(this.value)'>";
  echo "<option value=''>"."Select Storm for Period " . $period . "</option>";
  while($row = $result->fetch()) {
    echo "<option value='" . $row['loc_name']. " '>" .$row['loc_name']. "</option>";
  }
  echo "</select>";

?>