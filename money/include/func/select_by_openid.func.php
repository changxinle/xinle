<?php 
	function select_by_openid ($openid){
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql);
		$arr = $result->fetch_assoc();
		return $result;
		if ($arr['name'] == "") {
			return true;
		}else{
			return false;
		}
	}
 ?>