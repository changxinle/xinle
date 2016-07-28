<?php
     $mysqli =new mysqli("localhost","root","","wechat");
    if($mysqli->errno){
        die($mysqli->error);
    }
    $mysqli->query("set names utf8");
    $sql = "SELECT * FROM `count_money` ORDER BY `count_money`.`mark` DESC";
    $result = $mysqli->query($sql);
    $arr = array();
    $i = 0;
    while ($row = $result->fetch_assoc()) {
       $arr[$i] = $row;   
        $i++;  
        
    }
    echo(json_encode($arr));
    
    
    
    
    $mysqli->close();
    
    
    ?>