

function validateInputField(inputField, regExp){
	var value = $(inputField).val();
	//var firstNameRegExp = new RegExp('^[A-Za-z]{2,20}$');
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
//input valid:20 martie 2003
//input invalid 33 Aprilie 2005. 29 Februarie 2003
    function validateDate(){

    var day=$(".date-of-birth #day").val();
    var day=$(".date-of-birth #month").val();
    var day=$(".date-of-birth #year").val();

    var OK;

    if (OK = ((Year > 1900) && (Year < new Date().getFullYear()))) {
            if (OK = (Month <= 12 && Month > 0)) {

             var LeapYear = (((Year % 4) == 0) && ((Year % 100) != 0) || ((Year % 400) == 0));
                        if(OK = Day > 0) {
                            if (Month == 2) {
                                OK = LeapYear ? day <= 29 : day <= 28;
                            }
                            else {
                                if ((Month == 4) || (Month == 6) || (Month == 9) || (Month == 11)) {
                                    OK = day <= 30;
                                }
                                else {
                                    OK = day <= 31;
                                }
                            }
                        }
                    }
                }


$(document).ready(function(){
	$("#firstName").focusout(function(){
		validateInputField(this, new RegExp('^[A-Za-z]{2,20}$'));
	});
	$("#lastName").focusout(function(){
       		validateInputField(this, new RegExp('^[A-Za-z]{2,20}$'));
     });
     $("#email").focusout(function(){
     		validateInputField(this, new RegExp('^(?!(.*\\.\\.).*)(?=.{6,255}$)[^@\\s]+@[^@\\s,]+\\.[a-zA-Z0-9\\u007f-\\uffff-]{2,}$'));
     	});
     $("li.date-of-birth select").focusout(function(){
            validateDate();
     });

});