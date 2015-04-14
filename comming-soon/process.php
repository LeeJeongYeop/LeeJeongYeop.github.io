		<?php
		if($_POST['news_email_address']){
	
		$to = "wahabapple007@gmail.com";
		$from =  $_POST["news_email_address"];
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["news_email_address"]."<br />";
		$subject = 'Newsletter Subscription';		
		$headers = "From: ".$_POST["news_email_address"]."\n";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		
	    $send =	mail($to,$subject,$message,$headers);



		if($send)
		{
			echo "success";
		}
		else
		{
			echo "error";
			}
		}
		
		
		
		if($_POST['name']){
		$to = "wahabapple007@gmail.com";
		$from =  $_POST["email"];
		$message = "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Name: </strong>".$_POST["name"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp;<strong>Email Address: </strong>".$_POST["email"]."<br />";
		$message .= "&nbsp;&nbsp;&nbsp;&nbsp; <strong>Message: </strong>".$_POST["msg"]."<br />";
		$subject = 'Contact Us';		
		$headers = "From: ".$_POST["email"]."\n";
		$headers .= "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
		
	    $send =	mail($to,$subject,$message,$headers);



		if($send)
		{
			echo "success";
		}
		else
		{
			echo "error";
			}
		}
		
		
		
		?>