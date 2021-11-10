

function validateInputField(inputField, regExp){
	var value = $(inputField).val();
	// var firstNameRegExp = new RegExp('^[A-Za-z]{2,20}$');
	var isValid = regExp.test(value);
	var validationContainer = $(inputField).closest(".validation-container");
	var messageContainer = $(validationContainer).find(".message-container.message-box");
	
	if(isValid){
		$(validationContainer).removeClass("invalid");
		$(messageContainer).hide();
	} else {
		$(validationContainer).addClass("invalid");
		$(messageContainer).text("Input is invalid!").show();
	}
}


//input valid: 20-3-2002 invalid input: 33-13-2005, 29-02-2003
function validateDate(){

	var day= $(".date-of-birth #day").val();
	var month= $(".date-of-birth #month").val();
	var year= $(".date-of-birth #year").val();
  
    var OK;

	if (OK = (year > 1900) && (year < new Date().getFullYear())){
		if (OK = (month <= 12 && month > 0)) {             
				 
			var LeapYear = (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0));                
					 
			 if(OK = day > 0){

				if (month == 2) {

					OK = LeapYear ? day <= 29 : day <= 28;
				}
				else {
					if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
						OK = day <= 30;
					}
					else {
						OK = day <= 31;
					}
				}
			}
		}
	}

	var validationContainer = $("li.date-of-birth .validation-container");
	var messageContainer = $(validationContainer).find(".message-container.message-box");

	if(OK){
		$(validationContainer).removeClass("invalid");
		$(messageContainer).hide();
	} else {
		$(validationContainer).addClass("invalid");
		$(messageContainer).text("Input is invalid!").show();
	}


  
}

function validateGender(){

	var isValid=false;

	$("li.gender input").each(function(){
		
		if($(this).is(":checked")){
			isValid=true;
		}
		   

	});
		
	var validationContainer = $("li.gender .validation-container");
	var messageContainer = $(validationContainer).find(".message-container.message-box");

	if(isValid){
		
		console.log("e valid");

		$(validationContainer).removeClass("invalid");
		$(messageContainer).hide();
	} else {

		console.log("e invalid");


		$(validationContainer).addClass("invalid");
		$(messageContainer).text("Input is invalid!").show();
	}

}

function validateForm(){

	// alert("am validat tot");
	
	$("#firstName").focusout();
	$("#lastName").focusout();
	$("#email").focusout();

	validateDate();
	
	validateGender();

	validationWasTriggerd=true;


}

function erorsDisplayed(){
	
	return $(".invalid").length>0;
}

var validationWasTriggerd=false;

$(document).ready(function(){

	$("#firstName").focusout(function(){
		//validateInputField(this, new RegExp('^[A-Za-z]{2,20}$'));
	});
	$("#lastName").focusout(function(){
		//validateInputField(this, new RegExp('^[A-Za-z]{2,20}$'));
	});
	$("#email").focusout(function(){
		//validateInputField(this, new RegExp('^(?!(.*\\.\\.).*)(?=.{6,255}$)[^@\\s]+@[^@\\s,]+\\.[a-zA-Z0-9\\u007f-\\uffff-]{2,}$'));
	});
	$("li.date-of-birth select").focusout(function(){
		//validateDate();
	});

	$("#submitRegistration").click(function(e){

	    if(!validationWasTriggerd || validationWasTriggerd && erorsDisplayed()){
			//e.preventDefault();
			//validateForm();
		}
		
		
		
		
	});

});




