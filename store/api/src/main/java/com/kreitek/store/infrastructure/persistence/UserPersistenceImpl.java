package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.User;
import com.kreitek.store.domain.persistence.UserPersistence;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserPersistenceImpl implements UserPersistence {
    private final UserRepository userRepository;

    public UserPersistenceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers(){ return this.userRepository.findAll();}

    @Override
    public User saveUser(User user) { return this.userRepository.save(user);}

    @Override
    public void deleteUser(Long userId) { this.userRepository.deleteById(userId);}

    public Optional<User> getUserById(Long userId){ return this.userRepository.findById(userId);}

    @Override
    public Optional<User> getUserByNickAndPassword(String nick, String password){
        return this.userRepository.findByNickAndPassword(nick, password);
    }
}
