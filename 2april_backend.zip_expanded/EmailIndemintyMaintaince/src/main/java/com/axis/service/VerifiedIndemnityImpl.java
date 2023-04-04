package com.axis.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.dto.VerifiedIndemnityDTO;
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

//	@Override
//	public List<VerifiedIndemnity> addVerifiedDetails(List<IndemnityDetails> indemnDetails) {
//		// TODO Auto-generated method stub
//		List<IndemnityDetails> indemnityDetailsList = indemnRepository.findAll();
//		System.out.println(indemnityDetailsList);
//		List<VerifiedIndemnity> verifiedDetails = new ArrayList<>();
//		for(IndemnityDetails indemnityDetail: indemnityDetailsList) {
//			System.out.println(indemnityDetail.getVerify());
//			if(indemnityDetail.getVerify() == true) {
//				VerifiedIndemnity verifyDetails = new VerifiedIndemnity();
//				verifyDetails.setName(indemnityDetail.getName());
//				verifyDetails.setEmailId(indemnityDetail.getEmailId());
//				verifyDetails.setFaxNumber(indemnityDetail.getFaxNumber());
//				verifyDetails.setReferenceNumber(indemnityDetail.getReferenceNumber());
//				verifyDetails.setAccountNo(indemnityDetail.getAccountNo());
//				verifiedDetails.add(verifyDetails);
//			}
//		}
//		return verifiedDetails;
//	
//	}
	
	@Override
	public List<VerifiedIndemnityDTO> addVerifiedDetails(List<IndemnityDetails> indemnDetailsList) {
	    List<VerifiedIndemnityDTO> verifiedDetailsList = new ArrayList<>();
	    for (IndemnityDetails indemnityDetail : indemnDetailsList) {
	        if (indemnityDetail.getVerify() == true) {
	            VerifiedIndemnityDTO verifyDetails = new VerifiedIndemnityDTO();
	            verifyDetails.setName(indemnityDetail.getName());
	            verifyDetails.setEmailId(indemnityDetail.getEmailId());
	            verifyDetails.setFaxNumber(indemnityDetail.getFaxNumber());
	            verifyDetails.setReferenceNumber(indemnityDetail.getReferenceNumber());
	            verifyDetails.setAccountNo(indemnityDetail.getAccountNo());
	            verifiedDetailsList.add(verifyDetails);
	        }
	    }
	    List<VerifiedIndemnity> verifiedIndemnities = new ArrayList<>();
	    for (VerifiedIndemnityDTO verifiedDetails : verifiedDetailsList) {
	        VerifiedIndemnity verifiedIndemnity = new VerifiedIndemnity();
	        verifiedIndemnity.setName(verifiedDetails.getName());
	        verifiedIndemnity.setEmailId(verifiedDetails.getEmailId());
	        verifiedIndemnity.setFaxNumber(verifiedDetails.getFaxNumber());
	        verifiedIndemnity.setReferenceNumber(verifiedDetails.getReferenceNumber());
	        verifiedIndemnity.setAccountNo(verifiedDetails.getAccountNo());
	        verifiedIndemnities.add(verifiedIndemnity);
	    }
	    List<VerifiedIndemnity> savedVerifiedIndemnities = verifiedRepository.saveAll(verifiedIndemnities);
	    List<VerifiedIndemnityDTO> savedVerifiedIndemnityDTOs = new ArrayList<>();
	    for (VerifiedIndemnity savedVerifiedIndemnity : savedVerifiedIndemnities) {
	        VerifiedIndemnityDTO savedVerifiedIndemnityDTO = new VerifiedIndemnityDTO();
	        savedVerifiedIndemnityDTO.setName(savedVerifiedIndemnity.getName());
	        savedVerifiedIndemnityDTO.setEmailId(savedVerifiedIndemnity.getEmailId());
	        savedVerifiedIndemnityDTO.setFaxNumber(savedVerifiedIndemnity.getFaxNumber());
	        savedVerifiedIndemnityDTO.setReferenceNumber(savedVerifiedIndemnity.getReferenceNumber());
	        savedVerifiedIndemnityDTO.setAccountNo(savedVerifiedIndemnity.getAccountNo());
	        savedVerifiedIndemnityDTOs.add(savedVerifiedIndemnityDTO);
	    }
	    return savedVerifiedIndemnityDTOs;
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
