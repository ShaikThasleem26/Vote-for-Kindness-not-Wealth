<?php
include "con.php";
if($connection)
{
echo "!";
}
else{
echo "Error:".mysqli_error($connection);
}

$email=$_POST['Email'];
$password=$_POST['pwd'];
$query="CREATE TABLE login(email VARCHAR(50) NOT NULL,password VARCHAR(50) NOT NULL);";
/*
if(mysqli_query($connection,$query))
{
echo "table created";
}
else{
echo "Error:".mysqli_error($connection)."<br>";
}


*/


$query="INSERT INTO login VALUES('$email','$password');";
if(mysqli_query($connection,$query))
{
	echo "DATA STORED";
}
else
{
	echo "Error:".mysqli_error($connection);
}

mysqli_close($connection);
?>
<a href="index.html" class="link-btn"><button>PROCEED</button></a>



