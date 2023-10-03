<?php

    include "../shared/authgaurd_customer.php";
    include_once "../shared/connection.php";
    $cartid=$_GET['cartid'];

    mysqli_query($conn,"delete from cart where cartid=$cartid");
    if($status){
        echo "Product removed from cart";
        header("location:viewcart.php");
    }

    else{
        echo "Failed to remove from cart";
        echo mysqli_error($conn);
    }

?>