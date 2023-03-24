package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.AccountDetails;

public interface AccountDetailsRepository extends JpaRepository<AccountDetails, Long> {
	
}
