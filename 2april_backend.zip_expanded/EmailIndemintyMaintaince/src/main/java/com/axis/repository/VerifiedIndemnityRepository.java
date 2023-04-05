package com.axis.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.VerifiedIndemnity;

@Repository
public interface VerifiedIndemnityRepository extends JpaRepository<VerifiedIndemnity, Integer>{
	
	List<VerifiedIndemnity> findByAccountNo(String accountNo);
		
}
