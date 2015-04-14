// JavaScript Document

	///////////////////////////////////////// NEWSLETTER //////////////////////////////////////////

	
	function validateNewsletter(){
		
		var news_email_address = document.getElementById("news_email_address");
	
		var flag = 0;
		
		if(news_email_address.value=="")
		{
			news_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(checkcontact(news_email_address.value)==false)
		{
			news_email_address.style.borderColor = "#FE847B";
			flag = 1;
		}	
		
		if(flag == 0)
		{
			
			
			
			$.ajax({
							type: "POST",
							url: "process.php",
							data: $("#newsletter_form").serialize(),
							success: function(msg)
							{
								//alert(msg);
								if(msg == 'success'){
								$('#newsletter_form').fadeOut(500);
								$('#message-news').fadeIn(2000);
								document.getElementById("message-news").innerHTML = "Thank You! You've subscribed successfully.";
								return true;
								}else{
								
								$('#newsletter_form').fadeOut(500);
								$('#message-news').fadeIn(2000);
								document.getElementById("message-news").innerHTML = "Thank You! You've subscribed successfully.";
								return true;
								}
							}
						});
						
		}
	}


	///////////////////////////////////////// Contact us form //////////////////////////////////////////


	function checkcontact(input)
	{
		var pattern1=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
		if(pattern1.test(input))
		{
			return true;
		}
		else
		{
			return false;
		}
	}
		
		function removeChecks(){
		
		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var msg = document.getElementById("msg");
		
	
		if(name.value != ""){
		name.style.borderColor = "#C9C9C9";
		
		}
	
	
		if(email.value != ""){
		email.style.borderColor = "#C9C9C9";
		}
		if(checkcontact(email.value) == true){
		email.style.borderColor = "#C9C9C9";
		}
		
		if(msg.value != "" ){
		msg.style.borderColor = "#C9C9C9";
		}

		
		
		
		}			
					
	function validateContact(){
		var name = document.getElementById("name");
		var email = document.getElementById("email");
		var msg = document.getElementById("msg");
	
		var flag = 0;
		
		if(name.value == "" )
		{
			name.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(email.value=="")
		{
			email.style.borderColor = "#FE847B";
			flag = 1;
		}
		else if(checkcontact(email.value)==false)
		{
			email.style.borderColor = "#FE847B";
			flag = 1;
		}	
		else if(msg.value=="")
		{
			msg.style.borderColor = "#FE847B";
			flag = 1;
		}
		if(flag == 0)
		
		{
			$.ajax({
							type: "POST",
							url: "process.php",
							data: $("#contact_form").serialize(),
							success: function(msg)
							{
								//alert(msg);
								if(msg == 'success'){
								$('#contact_form').fadeOut(500);
								$('#message-contact').fadeIn(2000);
								document.getElementById("message-contact").innerHTML = "Thank You! We'll contact you shortly";
								return true;
								}else{
								$('#contact_form').fadeOut(500);
								$('#message-contact').fadeIn(2000);
								document.getElementById("message-contact").innerHTML = "Thank You! We'll contact you shortly";
								return true;
								}
							}
						});
	
		}
	}
	