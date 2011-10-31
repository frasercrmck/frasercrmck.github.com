// File: readXML.js

// Start function when DOM has completely loaded 
$(document).ready(function(){ 

	
	var $output = '<h2>Appendation</h2>'; 
	
	$( "#heading" ).append( $output );  
	
	$.ajax({  
		type: "GET",
		url: 'students.xml',  
		dataType: "xml",  
		success: Working , 
		error: NotWorking
    });
	
	//var $xml = "students.xml";
	//var $xmlDoc = $.parseXML($xml);    
});
 
 function Working(){
 	$( "#ContentArea" ).append( "<h3>Working!</h3>" );
 	return;
 }
 
  function NotWorking(){
 	$( "#ContentArea" ).append( "<h3>Not Working!</h3>" );
 	return;
 }
 
 
