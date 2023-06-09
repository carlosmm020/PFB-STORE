package com.kreitek.store.application.service.impl;

import com.kreitek.store.application.dto.UserDTO;
import com.kreitek.store.application.mapper.UserMapper;
import com.kreitek.store.application.service.UserService;
import com.kreitek.store.domain.entity.User;
import com.kreitek.store.domain.persistence.UserPersistence;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserServiceImpl implements UserService {
    private final UserPersistence userPersistence;
    private final UserMapper userMapper;

    @Autowired
    public UserServiceImpl(UserPersistence persistence, UserMapper mapper){
        this.userPersistence = persistence;
        this.userMapper = mapper;
    }

    public List<UserDTO>getAllUsers(){
        List<User> users = this.userPersistence.getAllUsers();
        return this.userMapper.toDto(users);
    }

    public Optional<UserDTO> getUserById(Long userId) {
        return this.userPersistence.getUserById(userId).map(userMapper::toDto);
    }

    @Override
    public UserDTO registerUser(UserDTO userDTO) {
        User userSaved = this.userPersistence.saveUser(this.userMapper.toEntity(userDTO));
        return this.userMapper.toDto(userSaved);
    }

    public void deleteUser(Long userId){this.userPersistence.deleteUser(userId);}

    @Override
    public Optional<UserDTO> loginUser(String nick, String password){
        Optional<User> user = userPersistence.getUserByNickAndPassword(nick, password);
        return user.map(userMapper::toDto);
    }

}
