<?php
    $mark =  $_GET["mark"];
    $username = $_GET["username"];
//  echo $mark;
    $mysqli = new mysqli("localhost","root","","wechat");
    if($mysqli->errno){
        die($mysqli->error);
    }
    $mysqli->query("set names utf8");
    $sql = "UPDATE count_money SET mark = '$mark' WHERE username = '$username'";
    $result = $mysqli->query($sql);
    if($result){
        echo "$mark";
    }
    $mysqli->close();
    
    
    ?>