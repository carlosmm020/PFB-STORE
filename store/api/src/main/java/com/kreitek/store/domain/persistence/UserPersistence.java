package com.kreitek.store.domain.persistence;

import com.kreitek.store.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserPersistence {
    List<User> getAllUsers();
    User saveUser(User user);
    void deleteUser(Long userId);

    Optional<User> getUserById(Long userId);

    Optional<User> getUserByNickAndPassword(String nick, String Password);
}
