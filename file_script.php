<?php

$name=$_POST['name'];
$vote=$_POST['vote'];
$data=$name.",".$vote;


$file="file.csv";


file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your email address!</h1>";


?>
<html>
<head>
<title>THANK YOU</title>    
</head>
<body>
<h1><a href="index.html">GO BACK</a> </h1>
    
</body>




</html>
