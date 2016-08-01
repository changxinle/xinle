<?php 
	include_once "../include/include.php";
	session_start();
	$openid = $_SESSION['openid'];
	$score = $_POST['score'];
	$_SESSION['score'] = $score;
	$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
	if ($mysqli->connect_errno) {
		die($mysqli->connect_error);
	}
	$mysqli->query(UTF8);
	$sql1 = "SELECT * FROM user WHERE openid = '$openid'";
	$result = $mysqli->query($sql1);
	$arr = $result->fetch_assoc();
	if ($score>$arr['score']) {
		$sql2 = "UPDATE user SET score = '$score' WHERE openid = '$openid'";
		$mysqli->query($sql2);
	}
	$mysqli->close();
 ?>