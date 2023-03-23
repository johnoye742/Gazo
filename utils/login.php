<?php
$email = $_POST["uern"];
$pwd = $_POST["pwd"];
$pwd = hash("sha256", $pwd);


$con = new PDO("mysql:host=localhost;dbname=gazo", "root", "");
$sql = "SELECT * FROM users WHERE email = '$email' OR uname = '$email' AND pwd = '$pwd'";
$query = $con -> query($sql);
if(!empty($query)) {
    foreach($query as $id => $value) {
        echo "success";
    }
} else {
    echo "unsuccessfull";
}
?>