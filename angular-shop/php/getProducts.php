<?php
    
    $mysqli = new mysqli("psn4qat8.zzcdb.dnstoo.com:4006","xinle_f","xinle0608","xinle");
    if($mysqli->connect_errno){
        die($mysqli->connect_error);
    };
    $mysqli->query("set names utf8");
    $sql = "SELECT * FROM `product`";
    $result = $mysqli->query($sql);
//  var_dump($result);
    if($result->num_rows){
        $data = $result->fetch_all(MYSQL_ASSOC);
        echo json_encode($data);  
    };
    
    $mysqli->close();
    
    
    
    
    ?>