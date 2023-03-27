package com.axis.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.VerifiedIndemnity;
import com.axis.repository.VerifiedIndemnityRepository;

@Service
public class VerifiedIndemnityImpl implements VerifiedIndemnityService{
	
	@Autowired
	VerifiedIndemnityRepository verifiedRepository;

	@Override
	public VerifiedIndemnity addDetails(VerifiedIndemnity verifiedDetails) {
		// TODO Auto-generated method stub
		return verifiedRepository.save(verifiedDetails);
	}

	@Override
	public VerifiedIndemnity getDetailsByAccountId(String accountNo) {
		// TODO Auto-generated method stub
		
		VerifiedIndemnity verified = verifiedRepository.getDetailsByAccountId(accountNo);
	    if (verified == null) {
	        throw new EntityNotFoundException("Anime not found with name: " + accountNo);
	    }
	    return verified;
	}
}
