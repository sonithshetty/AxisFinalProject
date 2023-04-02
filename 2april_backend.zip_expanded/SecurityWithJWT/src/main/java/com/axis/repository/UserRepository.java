package com.axis.repository;
import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.axis.model.UserDao;
public interface UserRepository extends CrudRepository<UserDao, Integer> {
    UserDao findByUsername(String username);
    List<UserDao> findAll();
}