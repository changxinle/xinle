<?php 
	header("content-type:text/html;charset=utf-8");
	date_default_timezone_set("PRC");
	define("ROOT",dirname(__FILE__));
	set_include_path(".".PATH_SEPARATOR.ROOT."/core".PATH_SEPARATOR.ROOT."/func".PATH_SEPARATOR.ROOT."/configs".PATH_SEPARATOR.get_include_path());
	include_once "config.php";
	include_once "http_req.func.php";
	include_once "get_user_info.func.php";
	include_once "select_by_openid.func.php";
 ?>