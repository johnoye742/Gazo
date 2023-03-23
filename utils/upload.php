<?php
if(isset($_FILES["file"])) {
    $file = $_FILES["file"];
    $types = ["png", "jpg", "gif"];
    $ftype = pathinfo($file["name"], PATHINFO_EXTENSION);
    $dir = "../uploads/images/";
    if(in_array($ftype, $types)) {
        if(!file_exists($dir . $file["name"])) {
            if(move_uploaded_file($file["tmp_name"], $dir . basename($file["name"]))) {
                echo "Uploaded " . $file["name"]; 
            }
        } else {
            echo $file["name"] . " already exists!";

        }
    }
}


?>