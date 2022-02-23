<?php
	require 'connect.php';
	$period = $_GET['period'];
	$sql_sProv = "SELECT DISTINCT stormlines.prov, stormlines.psgc_prov FROM stormlines
				WHERE period = '$period'
				ORDER BY stormlines.prov ASC";
				
	$result_sProv = $dbo->prepare($sql_sProv);
	$result_sProv->execute();

	// output data of each row
	echo "<select id='stormProvOpt' align='center' class='dropbox' onchange='stormProvChange(this.value, `$period`)' name='stormProv'>";
	echo "<option value=''>"."Select Province"."</option>";
	while($row = $result_sProv->fetch()) {
	  echo "<option value='" .$row['psgc_prov']. " '>" .$row['prov']. "</option>";
	}
	echo "</select>";
?>