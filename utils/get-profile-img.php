<?php
$usern = "johnoye742";
$con = new PDO("mysql:host=localhost;dbname=gazo", "root", "");
$sql = "SELECT pp FROM users WHERE uname = '$usern' OR email = '$usern'";
$query = $con -> query($sql);
if(!empty($query)) {
    foreach($query as $value)
    echo $value["pp"];
}
?>