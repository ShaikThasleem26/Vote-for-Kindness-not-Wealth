<?php
$connection=mysqli_connect("localhost","root","home@123","election");
if($connection)
{
echo "Appointment Successfull";
}
else{
echo "Error:".mysqli_error($connection);
}
?>
