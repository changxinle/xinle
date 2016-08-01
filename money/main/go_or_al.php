<?php 
	include_once "../include/include.php";
	session_start();
	$openid = $_SESSION['openid'];

	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql = "SELECT * FROM user WHERE openid = '$openid'";
	$result = $mysqli->query($sql);
	$arr = $result->fetch_assoc();
	if ($arr['name'] == "") {
		echo "insert";
	}else{
		echo "go_on";;
	}
 ?>