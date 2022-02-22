<?php
	require 'connect.php';
	$psgc_prov = $_GET['psgc_prov'];
	$period = $_GET['period'];
	$sql_storm = "SELECT * FROM stormlines
				WHERE psgc_prov = '$psgc_prov' AND period = '$period'
				ORDER BY stormlines.loc_name ASC";
				
	$result_storm = $dbo->prepare($sql_storm);
	$result_storm->execute();

	// output data of each row
	echo "<select id='stormOpt' align='center' class='dropbox' name='storm'>";
	echo "<option value=''>"."Select Storm"."</option>";
	while($row = $result_storm->fetch()) {
	  echo "<option value='" . $row['loc_name']. " '>" .$row['loc_name']. "</option>";
	}
	echo "</select>";
?>