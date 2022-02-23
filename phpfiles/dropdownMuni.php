<?php
	require 'connect.php';
	$prov_id = $_GET['psgc_prov'];
	$sql_mun = "SELECT * FROM municity
				WHERE psgc_prov = '$prov_id'
				ORDER BY muni_name ASC";
				
	$result_mun = $dbo->prepare($sql_mun);
	$result_mun->execute();

	// output data of each row
	echo "<select id='munOpt' align='center' class='dropbox' name='municity'>";
	echo "<option value=''>"."Show All Municipality/City"."</option>";
	while($row = $result_mun->fetch()) {
	  echo "<option value='" . $row['psgc_muni']. " '>" .$row['muni_name']. "</option>";
	}
	echo "</select>";
?>