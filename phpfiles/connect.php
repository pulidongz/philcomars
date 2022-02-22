<?php
// This is a PHP file concerning the connection
// of the website to the database
//
// Author: John Christopher E. Azcarraga
// Date: January 2017

// ASTI server config (202.90.159.38)
// necessary variables for dbase connection to VPS
	// $host_name = "localhost";
	// $database = "philcomars"; // Change your database name
	// $username = "root"; // Your database user id 
	// $password = "admin"; // Your password

// Localhost config
	$host_name = "localhost";
	$database = "philcomars"; // Change your database name
	$username = "pul"; // Your database user id 
	$password = "admin"; // Your password

	//////// Do not Edit below /////////
	try {
	$dbo = new PDO('mysql:host='.$host_name.';dbname='.$database, $username, $password);
	} catch (PDOException $e) {
	print "Error!: " . $e->getMessage() . "<br/>";
	die();
	}

?>