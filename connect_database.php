<!Doctype html>
<html>
<head>
  <title>fdskl</title>
</head>
<body>
<?php

DEFINE ('DB_USER','jobdb');
DEFINE ('DB_PSWD','0_aNDx74');
DEFINE ('DB_HOST','107.161.31.122');
DEFINE ('DB_NAME','netscapes');
DEFINE ('DB_PORT','8888');

$dbcon = mysql_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME, DB_PORT);

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
