<?php 
    include "db_conn.php";
    $searchuser='';
    if(isset($_POST['searchuser'])){
        $searchuser = $_POST['searchuser'];
    }
    //$user = "joanna";
    $query = ("select * from account where searchuser = ?");
    $stmt = $db->prepare($query);
    //$error = $stmt->execute(array($no));
    $stmt->execute(array('%'.$searchuser.'%'));
    $result = $stmt->fetchAll();
    //以上寫法是為了防止「sql injection」 
 
    for($i=0; $i<count($result); $i++){
        echo "username:".$result [$i]['username'].' '.
        "password:". $result [$i]['password'].' '.
        '<br>'; 
    }
?>