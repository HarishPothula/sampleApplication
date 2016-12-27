<?php
include("db.php"); //including config.php in our file

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$fathername = $_POST['fathername'];
$gothram = $_POST['gothram'];
$DOB = $_POST['DOB'];
$education = $_POST['education'];
$occupation = $_POST['occupation'];
$fatheroccupation = $_POST['fatheroccupation'];
$familydetails = $_POST['familydetails'];
$properties = $_POST['properties'];
$tob = $_POST['tob'];
$naksatram = $_POST['naksatram'];
$rassi = $_POST['rassi'];
$height = $_POST['height'];
	  $query = "INSERT INTO registration (fname, lname, fathername, gothram, DOB, education,
	  occupation,  fatheroccupation, familydetails, properties,  tob,  naksatram, rassi, height)
	  VALUES ('$fname', '$lname', '$fathername', '$gothram', '$DOB', '$education', '$occupation',
	  '$fatheroccupation', '$familydetails', '$properties',  '$tob', '$naksatram', '$rassi', '$height');";
$result = mysql_query($query) OR die(mysql_error());
header("Location: ../admin/registration2.php");
?>



