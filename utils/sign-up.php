<?php
$username = $_POST["uname"];
$fname = $_POST["fname"];
$lname = $_POST["lname"];
$email = $_POST["email"];
$pwd = $_POST["pwd"];
$pwd = hash("sha256", $pwd);     

$con = new PDO("mysql:host=localhost;dbname=gazo", "root", "");
$sql = "INSERT INTO users (uname, fname, lname, email, pwd)
VALUES ('$username', '$fname', '$lname', '$email', '$pwd')";

if($con -> exec($sql)) echo "success"; else echo "failed";
?>