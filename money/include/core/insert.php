<?php
	// 查看数据库是否有，没有就添加
	function ($code){

		$res = get_user_info($code);
		$obj = json_decode($res);
		$openid = $obj->openid;
		$mysqli = new mysqli(HOST,USERNAME,PASSWORD,SQL);
		if ($mysqli->connect_errno) {
			die($mysqli->connect_error);
		}
		$mysqli->query(UTF8);
		$sql = "SELECT * FROM user WHERE openid = '$openid'";
		$result = $mysqli->query($sql);
		if ($result->num_rows>0) {
			
		}else{
			$nicename = $obj->nicename;
			$sex = $obj->sex==1?"男":"女";
			$head_img = $obj->headimgurl;
			$score = 0;

			$sql1 = "INSERT INTO user(openid,nickname,score,sex,head_img) VALUES('$openid','$nickname','$score','$sex','$head_img')";
			$result = $mysqli->query($sql1);
		}
	}





 ?>