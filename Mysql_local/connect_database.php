<!Doctype html>
<html>
<head>
</head>
<body>
<?php

DEFINE ('DB_USER','root');
DEFINE ('DB_PSWD','pomidoras');
DEFINE ('DB_HOST','localhost');

/*DEFINE ('DB_USER','jobdb');
DEFINE ('DB_PSWD','cAn_3H07v');
DEFINE ('DB_HOST','direct.107.161.31.122');*/
DEFINE ('DB_NAME','netscapes');
//DEFINE ('DB_PORT','12322');

// creates connection
$dbcon = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

//checks if connection was successful
if(!$dbcon)
{
  die('Cannot connect to the database');
}
else {
  echo "connection was successful";
}
?>

</body>
</html>
