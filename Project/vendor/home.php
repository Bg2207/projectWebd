<?php
include "../shared/authguard_vendor.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <style>
    .pdt-card{
        width:300px;
        display:inline-block;
        margin:10px;
        border:2px solid grey;
        padding:10px;

    }
    .pdt-img{
       width:100%;
       height:200px;
    }
    .price{
        font-size:24px;
    }
    .price::before{
        content:"Rs."
    }
    .name{
        font-size:22px;
        font-weight:bold;
        color:violet;
    }
   </style>

   <!-- font awesome cdn link  -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

<!-- custom css file link  -->
<link rel="stylesheet" href="css/style.css">


</head>
<body>
    <h1>Vendor hone welcomes you...</h1>
</body>
</html>

<?php

    include_once "../shared/connection.php";

    $sql_obj=mysqli_query($conn,"select * from product where uploaded_by=$_SESSION[userid]");
    
    while($row=mysqli_fetch_assoc($sql_obj)){        
        //print_r($row);
        echo "<div class='pdt-card'>
                <div class='name'>$row[name]</div>
                <div class='price'>$row[price]</div>    
                <div class='code'>$row[code]</div>            
                <img class='pdt-img' src='$row[imgpath]'>   
                <div class='category'>$row[category]</div>                                 
                <div class='details'>$row[details]</div>
            </div>";
    }
    

?>