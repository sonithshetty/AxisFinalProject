package com.axis.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.axis.model.VerifiedIndemnity;

@Repository
public interface VerifiedIndemnityRepository extends JpaRepository<VerifiedIndemnity, Integer>{
	
//	@Query("SELECT a  FROM VERIFIED_DETAILS WHERE a.accountNo = :accountNo")
//	List<VerifiedIndemnity> findByAccountNo(String accountNo);
}
