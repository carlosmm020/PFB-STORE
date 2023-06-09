package com.kreitek.store.infrastructure.persistence;

import com.kreitek.store.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User, Long> {
    List<User> findAllById(Long id);

    Optional<User> findByNickAndPassword(String nick, String password);
}
