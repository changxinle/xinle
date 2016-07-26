<?php
    $username = $_POST["username"];
    $tel = $_POST["tel"];
    
    $mysqli =new mysqli("localhost","root","","wechat");
    if($mysqli->errno){
        die($mysqli->error);
    }
    $mysqli->query("set names utf8");
    $sql = "INSERT INTO count_money (username,tel) values('$username','$tel')";
    $result = $mysqli->query($sql);
    if($result){
        echo "$username";
    }
    $mysqli->close();
    
    
    
    ?>
