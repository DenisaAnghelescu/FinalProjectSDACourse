package com.intellibet.service;

import com.intellibet.dto.UserForm;
import com.intellibet.mapper.UserMapper;
import com.intellibet.model.User;
import com.intellibet.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private UserRepository userRepository;

    public void save(UserForm userForm) {
        User user = userMapper.map(userForm);
        userRepository.save(user);
    }
}
