<?php 
	include_once "../include/include.php";
	session_start();
	$openid = $_SESSION['openid'];
	$name = $_POST['name'];
	$tel = $_POST['tel'];
	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql = "UPDATE user SET name = '$name',tel = '$tel' WHERE openid = '$openid'";
	$result = $mysqli->query($sql);
	// $row = $result->fetch_assoc();
	// $json = json_encode($row);
	$mysqli->close();
	// echo $json;
 ?>