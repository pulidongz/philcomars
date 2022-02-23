<?php
	require 'connect.php';
	$sql_reg = "SELECT * FROM province
				WHERE province.site = 'TRUE'
				ORDER BY province.psgc_prov ASC";

	$result = $dbo->prepare($sql_reg);
	$result->execute();

	// output data of each row
	echo "<legend>Site Locations</legend>";
	echo "<div id='provDiv' align='center'><select id='provOpt' class='dropbox' name='province' onchange='provChange(this.value)'>";
	echo "<option value=''>"."Select Province"."</option>";
	while($row = $result->fetch()) {
	  echo "<option value='" . $row['psgc_prov']. " '>" .$row['prov_name']. "</option>";
	}
	echo "</select></div>";

	echo "<br><div id='munDiv' align='center'><select id='munOpt' class='dropbox' name='municity'>";
	echo "<option value=''>"."Select Municipality/City"."</option>";
	echo "</select></div>";
?>