<?php
$name = $_POST['name'];
$tel = $_POST['telephone'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);

$name = urlencode($name);
$tel = urlencode($tel);

$name = trim($name);
$tel = trim($tel);

if (mail("to_kirillwalker@gmail.com",
     "Pest Reject",
     "Имя: ".$name."\n".
     "Телефон ".$tel,
     "From: tort@tortello.com \r\n")
){
     header("Location: /index.html");
}

else {
     echo ("Error");
}

?>