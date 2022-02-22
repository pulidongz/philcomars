<?php
	require 'connect.php';
	$sql_period = "SELECT DISTINCT period FROM stormlines
					 ORDER BY period ASC";

	$result = $dbo->prepare($sql_period);
	$result->execute();

	// output data of each row
	echo "<legend>Storm Tracks Filter</legend>";
	echo "<div id='stormPeriodDiv' align='center'><select id='stormPeriodOpt' class='dropbox' name='stormPeriod' onchange='stormPeriodChange(this.value)'>";
	echo "<option value=''>"."Select Storm Period"."</option>";
	while($row = $result->fetch()) {
	  echo "<option value='" . $row['period']. " '>" .$row['period']. "</option>";
	}
	echo "</select></div>";

	echo "<br><div id='stormProvDiv' align='center'><select id='stormProvOpt' class='dropbox' name='stormProv' onchange='stormProvChange(this.value)'>";
	echo "<option value=''>"."Select Province"."</option>";
	echo "</select></div>";

	echo "<br><div id='stormDiv' align='center'><select id='stormOpt' class='dropbox' name='storm'>";
	echo "<option value=''>"."Select Storm"."</option>";
	echo "</select></div>";
?>