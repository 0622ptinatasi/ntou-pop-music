<html>
	<head>
		<title>db_conn</title>
	</head>
	<body>
		<?php 
			//$user = 'id21674413_admin'; //000資料庫使用者名稱
			//$password = '1234!@#$qwerQWER'; //000資料庫的密碼
			$user = 'root'; //host資料庫使用者名稱
			$password = '00933103'; //host資料庫的密碼
			try{
				$db = new 
			PDO('mysql:host=localhost;dbname=id21674413_account;charset=utf8',$user,$password);
				//之後若要結束與資料庫的連線，則使用「$db = null;」
				$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$db->setAttribute(PDO::ATTR_EMULATE_PREPARES,false);
			}catch(PDOException $e){	//若上述程式碼出現錯誤，便會執行以下動作
				Print "ERROR!: " . $e->getMessage();
				die();
			}
		?> 
	</body> 
</html> 