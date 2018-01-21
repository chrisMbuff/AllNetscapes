<!Doctype html>
<html>
<head>
</head>
<body>
<?php

DEFINE ('DB_USER','root');
DEFINE ('DB_PSWD','****');
DEFINE ('DB_HOST','localhost');
DEFINE ('DB_NAME','netscapes');

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
