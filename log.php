<?php
include "con.php";
if($connection)
{
echo "!";
}
else{
echo "Error:".mysqli_error($connection);
}

$representatives=$_POST['representative'];

$query="CREATE TABLE category(representative VARCHAR(50) NOT NULL);";
/*
if(mysqli_query($connection,$query))
{
echo "table created";
}
else{
echo "Error:".mysqli_error($connection)."<br>";
}


*/


$query="INSERT INTO category VALUES('$representatives');";
if(mysqli_query($connection,$query))
{
	echo "CATEGORY RECORDED";
}
else
{
	echo "Error:".mysqli_error($connection);
}

mysqli_close($connection);
?>
<a href="f.html" class="link-btn"><button>ENTER ISSUE</button></a>



