<?php

$representatives=$_POST['representative'];
$noofvotes=$_POST['votes'];
$data=$representative.",".$vote;


$file="file1.csv";


file_put_contents($file, $data . PHP_EOL, FILE_APPEND);
print "<h1 align=center>Thank you for submitting your email address!</h1>";


?>
<html>
<head>
<title>ThankYou Page</title>    
</head>
<body>
<h1><a href="file1.html">GO BACK</a> </h1>
    
</body>




</html>
