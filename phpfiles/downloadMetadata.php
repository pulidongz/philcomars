<!-- This file lists all downloadable metadata and its descriptions -->

<?php
	require 'connect.php';
	$sql = "SELECT * FROM metadata
				ORDER BY name ASC";
	$result = $dbo->prepare($sql);
	$result->execute();

	while($row = $result->fetch()) {
		$text = fopen($row['text'], "r") or die("Unable to open file!");
		echo "<table align='center'>";
		echo "<tr><th style='background-color: rgba(28, 26, 89, 0.3);'>" . $row['heading'] . "</th></tr>";
		echo "<tr><td>";
		while($line = fgets($text)) {
			echo $line . "<br/>";
		}
		fclose($text);
		echo "<br><strong><a href='" . $row['pdf'] . "' download> Download Metadata </a></strong></td></tr>";
		echo "</table>";
	}
?>