package com.kreitek.store.application.service;

import com.kreitek.store.application.dto.UserDTO;
import com.kreitek.store.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDTO> getAllUsers();
    UserDTO registerUser(UserDTO userDTO);
    void deleteUser(Long userId);
    Optional<UserDTO> getUserById(Long userId);
    Optional<UserDTO> loginUser(String nick, String password);

}
