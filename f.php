<?php
include "con.php";
if($connection)
{
echo "!";
}
else{
echo "Error:".mysqli_error($connection);
}

$name=$_POST['name'];
$mail=$_POST['email'];
$number=$_POST['number'];
$address=$_POST['address'];
$issue=$_POST['issue'];

$query="CREATE TABLE relatedtocategory(name VARCHAR(50) NOT NULL,mail VARCHAR(50),number VARCHAR(50),address VARCHAR(50), issue VARCHAR(50));";
/*
if(mysqli_query($connection,$query))
{
echo "table created";
}
else{
echo "Error:".mysqli_error($connection)."<br>";
}
*/




$query="INSERT INTO relatedtocategory VALUES('$name','$mail','$number','$address','$issue');";
if(mysqli_query($connection,$query))
{
	echo "ISSUE RECORDED";
}
else
{
	echo "Error:".mysqli_error($connection);
}

mysqli_close($connection);
?>
<a href="ff.html" class="link-btn"><button>SAVED</button></a>



