<!Doctype html>
<html>
<head>
</head>
<body>
<?php

abstract class PDORepository{
        const USERNAME="jobdb";
        const PASSWORD="0_aNDx74";
        const HOST="107.161.31.122";
        const DB="netscapes";

        private function getConnection(){
            $username = self::USERNAME;
            $password = self::PASSWORD;
            $host = self::HOST;
            $db = self::DB;
            $connection = new PDO("mysql:dbname=$db;host=$host", $username, $password);

            if(!$connection)
            {
              die('Cannot connect to the database');
            }
            else {
              echo "connection was successful";
            }
            return $connection;

        }
?>

</body>
</html>
