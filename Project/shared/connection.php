<?php

$conn=new mysqli("localhost","root","","acme_23_june");
if($conn->connect_error){
    echo "Connection Failed";
    die;
}

?>