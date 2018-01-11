<?php
/*session_start();
require 'connect_database.php';*/
include "..\connect_database.php";

if (isset($_POST["submit"]))
{

  $organized_unorganized = $_POST['c1'];
  $careful_careless = $_POST['c2'];
  $disciplined_impulsive = $_POST['c3'];

  $kind_ruthless = $_POST['a1'];
  $trusting_suspicious = $_POST['a2'];
  $helpful_uncooperative = $_POST['a3'];

  $calm_anxious = $_POST['n1'];
  $secure_insecure = $_POST['n2'];
  $satisfied_pitying = $_POST['n3'];

  $imaginative_practical = $_POST['o1'];
  $variety_routine = $_POST['o2'];
  $independent_conforming = $_POST['o3'];

  $sociable_shy = $_POST['e1'];
  $fun_serious = $_POST['e2'];
  $affectionate_reserved = $_POST['e3'];
  //$c_id = $_POST['c_id'];

      $sql = "INSERT INTO conscientiousness(org_unorg, careful_careless, disci_impul) VALUES ('"
          .$organized_unorganized
          ."', '"
          .$careful_careless
          ."', '"
          .$disciplined_impulsive
          ."'); ";


      $sql2 = "INSERT INTO agreeableness(kind_ruth, trust_sus, help_uncoop) VALUES ('"
          .$kind_ruthless
          ."', '"
          .$trusting_suspicious
          ."', '"
          .$helpful_uncooperative
          ."'); ";


      $sql3 = "INSERT INTO neuroticism(calm_anx, secure_inse, satis_pity) VALUES ('"
          .$calm_anxious
          ."', '"
          .$secure_insecure
          ."', '"
          .$satisfied_pitying
          ."'); ";

      $sql4 = "INSERT INTO openess(ima_prac, variety_routine, inde_conform) VALUES ('"
          .$imaginative_practical
          ."', '"
          .$variety_routine
          ."', '"
          .$independent_conforming
          ."'); ";

      $sql5 = "INSERT INTO extraversion(socia_shy, fun_serious, affec_reserved) VALUES ('"
          .$sociable_shy
          ."', '"
          .$fun_serious
          ."', '"
          .$affectionate_reserved
          ."'); ";

    //  echo "\n$sql\n";
      //c
      $result = mysqli_query($dbcon,$sql);
      //a
      $result2 = mysqli_query($dbcon,$sql2);
      //n
      $result3 = mysqli_query($dbcon,$sql3);
      //o
      $result4 = mysqli_query($dbcon,$sql4);
      //e
      $result5 = mysqli_query($dbcon,$sql5);

      if(!$result)
      {
        echo mysqli_error($dbcon);
        echo "Couldn't enter data";

      }
      else
      {
          echo "Data entered";
      }

      if(!$result2)
      {
        echo mysqli_error($dbcon);
        echo "Couldn't enter data";

      }
      else
      {
          echo "Data entered";
      }

      if(!$result3)
      {
        echo mysqli_error($dbcon);
        echo "Couldn't enter data";

      }
      else
      {
          echo "Data entered";
      }

      if(!$result4)
      {
        echo mysqli_error($dbcon);
        echo "Couldn't enter data";

      }
      else
      {
          echo "Data entered";
      }

      if(!$result5)
      {
        echo mysqli_error($dbcon);
        echo "Couldn't enter data";

      }
      else
      {
          echo "Data entered";
      }

}

mysqli_close($dbcon);
  include 'index.php';

 ?>
