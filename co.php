<?php
$connection=mysqli_connect("localhost","root","home@123","Election");
if($connection)
{
echo "Successfully Connected";
}
else{
echo "Error:".mysqli_error($connection);
}
?>
