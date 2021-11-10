package com.intellibet.validator;


import com.intellibet.dto.UserForm;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UserFormValidator implements Validator {

    private static final Pattern VALID_EMAIL_ADDRESS_REGEX =
            Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$", Pattern.CASE_INSENSITIVE);

    private static boolean validateEmail(String emailStr) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailStr);
        return matcher.find();
    }


    @Override
    public boolean supports(Class<?> aClass ) {
        return UserForm.class.equals(aClass);
    }

    @Override
    public void validate(Object o, Errors errors) {
        UserForm userForm = (UserForm) o;
        if(userForm.getFirstName()==null || userForm.getFirstName().length()<2 || userForm.getFirstName().length()>20){
            errors.rejectValue("firstName", "userForm.firstName.error");
        }
        if(userForm.getLastName()==null || userForm.getLastName().length()<2 || userForm.getLastName().length()>20){
            errors.rejectValue("lastName", "userForm.lastName.error");
        }

        if(!validateEmail(userForm.getEmail())){
            errors.rejectValue("email", "userForm.email.error");
        }

        if(userForm.getGender()==null){
            errors.rejectValue("gender", "userForm.gender.error");
        }

    }


}
