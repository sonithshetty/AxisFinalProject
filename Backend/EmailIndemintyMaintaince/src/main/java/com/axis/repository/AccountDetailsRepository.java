package com.axis.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.AccountDetails;

public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Long> {

	Optional<AccountDetails> findById(String accountNo);

	String deleteById(String accountNo);
	
}
