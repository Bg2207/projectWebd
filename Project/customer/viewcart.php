<?php

    include "../shared/authgaurd_customer.php";
    include "menu.html";
    include "../shared/connection.php";

    $sql_result=mysqli_query($conn, "select * from cart join product on cart.pid=product.pid where userid=$_SESSION[userid]");

    while($row=mysqli_fetch_assoc($sql_obj)){

        echo "<div class='pdt-card'>
        <div class='name'>$row[name]</div>
        <div class='price'>$row[price]</div>
        <div class='code'>$row[code]</div>
        <div class='pdt-img'>$row[imgpath]</div>
        <div class='category'>$row[category]</div>
        <div class='details'>$row[details]</div>
        <img src='$row[imgpath]'>
        <hr>
        <div>
        <a href='deletecart.php?pid=$row[cartid]'>
        <button class='btn btn-warning'>Remove Cart</button>
        </a>
        </div>
    </div>";

    $total=$total+$row['price'];
    }

    echo "<div class='bg-primary p-3 d-flex justify-content-around'>

        <form action='craeteorder.php' method='post'>
            <h1 class='text-white'>Total Payable=$total</h1>
            <textarea required name='address' placeholder='Delivery Address' col='50' class='d-flex m-3'></textarea>
      
            <button class='btn btn-warning'>Place order</button>
        </form>
    </div>"

    

?>