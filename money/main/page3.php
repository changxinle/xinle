<?php 
	include_once "../include/include.php";
	session_start();
	$openid = $_SESSION['openid'];
	$score = $_SESSION['score'];
	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql = "SELECT * FROM user WHERE openid = '$openid'";
	$result = $mysqli->query($sql);
	$row = $result->fetch_assoc();
	$arr = array();
	array_push($arr,$row);
	
	$sql1 = "SELECT * FROM user ORDER BY score DESC";
	$result1 = $mysqli->query($sql1);
	while ($row1 = $result1->fetch_assoc()) {
		array_push($arr, $row1);
	}
	array_push($arr, $score);
	$json = json_encode($arr);
	$mysqli->close();
	echo $json;

 ?>