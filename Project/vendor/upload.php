<?php

    include "../shared/authgaurd_vendor.php";
    $userid=$_SESSION['userid'];

    // print_r($_POST);
    // echo "<br>";
    // print_r($_FILES);
    echo "<br>";

    include_once "../shared/connection.php";

    $impath=$_POST['name'];
    move_uploaded_file($_FILES['pft_img'][name])
    $status = mysqli_query($conn,"insert into product(name,price,details,code,category,imgpath,uploaded_by,active) values('$_POST[name]',$_POST[price],'$_POST[details]','$_POST[code]','$_POST[category]','$impath',
    $userid,'$_POST[active]'");

    $imgpath="../shared/iamges/".$_FILES['pdt_img']['name'];

    move_uploaded_file($_FILES['pdt_img']['tmp_name'],$imgpath);

    if($status){
        echo "Product uploaded successfully";
        header("location:home.php");
    }

    else{
        echo "error in product upload";
        echo mysqli_error($conn);
    }
    


?>