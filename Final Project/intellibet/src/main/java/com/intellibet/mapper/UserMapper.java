package com.intellibet.mapper;

import com.intellibet.dto.UserForm;
import com.intellibet.model.Gender;
import com.intellibet.model.User;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class UserMapper {


    public User map(UserForm userForm) {
        User user = new User();
        user.setFirstName(userForm.getFirstName());
        user.setLastName(userForm.getLastName());
        user.setEmail(userForm.getEmail());
        user.setDateOfBirth(getDateOfBirthFrom(userForm));
        user.setGender(Gender.getGenderFromString(userForm.getGender()));
        return user;
    }

    private LocalDate getDateOfBirthFrom(UserForm userForm) {
        int year = Integer.parseInt(userForm.getYearOfBirth());
        int month = Integer.parseInt(userForm.getMonthOfBirth());
        int day = Integer.parseInt(userForm.getDayOfBirth());
        LocalDate result = LocalDate.of(year, month, day);
        return result;
    }
}
