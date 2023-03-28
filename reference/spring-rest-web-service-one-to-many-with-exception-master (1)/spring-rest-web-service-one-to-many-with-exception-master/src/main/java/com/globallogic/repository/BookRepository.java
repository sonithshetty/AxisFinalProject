package com.globallogic.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.globallogic.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
