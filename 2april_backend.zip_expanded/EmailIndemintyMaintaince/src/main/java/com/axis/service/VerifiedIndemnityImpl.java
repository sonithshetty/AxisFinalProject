package com.axis.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.exception.IdNotFoundException;
import com.axis.model.IndemnityDetails;
import com.axis.model.VerifiedIndemnity;
import com.axis.repository.IndemnityDetailsRepository;
import com.axis.repository.VerifiedIndemnityRepository;

@Service
public class VerifiedIndemnityImpl implements VerifiedIndemnityService{
	
	@Autowired
	VerifiedIndemnityRepository verifiedRepository;
	
	@Autowired
	IndemnityDetailsRepository indemnRepository;

	@Override
	public List<VerifiedIndemnity> addVerifiedDetails(List<IndemnityDetails> indemnDetails) {
		// TODO Auto-generated method stub
		List<IndemnityDetails> indemnityDetailsList = indemnRepository.findAll();
		System.out.println(indemnityDetailsList);
		List<VerifiedIndemnity> verifiedDetails = new ArrayList<>();
		for(IndemnityDetails indemnityDetail: indemnityDetailsList) {
			System.out.println(indemnityDetail.getVerify());
			if(indemnityDetail.getVerify() == true) {
				VerifiedIndemnity verifyDetails = new VerifiedIndemnity();
				verifyDetails.setName(indemnityDetail.getName());
				verifyDetails.setEmailId(indemnityDetail.getEmailId());
				verifyDetails.setFaxNumber(indemnityDetail.getFaxNumber());
				verifyDetails.setReferenceNumber(indemnityDetail.getReferenceNumber());
				verifyDetails.setAccountNo(indemnityDetail.getAccountNo());
				verifiedDetails.add(verifyDetails);
			}
		}
		return verifiedDetails = indemnRepository.save();
	}

	@Override
	public String deleteVerifiedDetails(int id) {
		// TODO Auto-generated method stub
		Optional<VerifiedIndemnity> optionalVerifiedDetails = verifiedRepository.findById(id);
        if (optionalVerifiedDetails.isPresent()) {
        	verifiedRepository.deleteById(id);
            return "Selected VerifiedDetails deleted Successfully";
        } else {
            throw new IdNotFoundException("No such id is present to delete the value");
        }
	}

}
