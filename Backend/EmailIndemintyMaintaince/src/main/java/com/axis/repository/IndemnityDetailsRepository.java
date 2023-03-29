package com.axis.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.axis.model.IndemnityDetails;

public interface IndemnityDetailsRepository extends JpaRepository<IndemnityDetails, Integer>{

//	@Quer("SELECT a FROM indemnity_details a WHERE a.accountNo = :accountNo")
	List<IndemnityDetails> findByAccountNo(String accountNo);

}
