
	function validate(fieldName, fieldVal) {
	if (fieldName == 'first_name') {
	 	show_error(fieldName, fieldVal);
	}else if(fieldName == 'last_name'){
	 	show_error(fieldName, fieldVal);
	}else if(fieldName == 'email'){
	 	show_error_email(fieldName, fieldVal);
	}else if(fieldName == 'password'){
	 	show_error_password(fieldName, fieldVal);
	}
}
function show_error(fieldName, fieldVal){
 	if(fieldVal.trim() == ''){
	 	$("#"+fieldName+"_error").show("fast");
 	}else{
 	$("#"+fieldName+"_error").hide("fast");
 	}
}
function password_val(){
	password = $("#password").val().trim();
	password_again = $("#password_again").val().trim();
	if(password == password_again){
		$("#password_again_error").hide("fast");
	}else{
		$("#password_again_error").show("fast");
	}
}
function show_error_email(fieldName, fieldVal){
	if((fieldVal.trim() == '') || (validateEmail(fieldVal.trim()) == false) ){
		$("#"+fieldName+"_error").show("fast");
	}else{
		$("#"+fieldName+"_error").hide("fast");
	}
}
function show_error_password(fieldName, fieldVal){
	if((fieldVal.trim() == '') || (fieldVal.trim().length < 5) ){
		$("#"+fieldName+"_error").show("fast");
	}else{
		$("#"+fieldName+"_error").hide("fast");
	}
}
function validateEmail(email){
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
