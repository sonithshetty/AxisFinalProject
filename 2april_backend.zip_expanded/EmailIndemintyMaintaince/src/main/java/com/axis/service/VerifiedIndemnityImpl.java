package com.axis.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.VerifiedIndemnityDTO;
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
	public List<Integer> deleteVerifiedDetailsByIdList(List<Integer> ids) {
		// TODO Auto-generated method stub
		verifiedRepository.deleteAllById(ids);
	    return ids;
	}

	@Override
	public List<VerifiedIndemnityDTO> getDetailsByAccountNo(String accountNo) {
		// TODO Auto-generated method stub
		List<VerifiedIndemnity> verifiedDetailsList = verifiedRepository.findByAccountNo(accountNo);
        List<VerifiedIndemnityDTO> verifiedDetailsDTOList = new ArrayList<>();
        for (VerifiedIndemnity verifiedDetails : verifiedDetailsList) {
            VerifiedIndemnityDTO verifiedDetailsDTO = new VerifiedIndemnityDTO();
            verifiedDetailsDTO.setId(verifiedDetails.getId());
            verifiedDetailsDTO.setAccountNo(verifiedDetails.getAccountNo());
            verifiedDetailsDTO.setName(verifiedDetails.getName());
            verifiedDetailsDTO.setEmailId(verifiedDetails.getEmailId());
            verifiedDetailsDTO.setFaxNumber(verifiedDetails.getFaxNumber());
            verifiedDetailsDTO.setReferenceNumber(verifiedDetails.getReferenceNumber());
            verifiedDetailsDTOList.add(verifiedDetailsDTO);
        }
        return verifiedDetailsDTOList; 
	}

	@Override
	public List<VerifiedIndemnity> updateDetailsByIdList(List<VerifiedIndemnity> verifiedDetails) {
		// TODO Auto-generated method stub
		List<VerifiedIndemnity> updatedVerifiedList = new ArrayList<VerifiedIndemnity>( );
		
		for (VerifiedIndemnity verifiedDetail: verifiedDetails) 
		{
			VerifiedIndemnity toUpdateList = new VerifiedIndemnity();
				 toUpdateList.setId(verifiedDetail.getId());
				 toUpdateList.setAccountNo(verifiedDetail.getAccountNo());
				 toUpdateList.setName(verifiedDetail.getName());
				 toUpdateList.setEmailId(verifiedDetail.getEmailId());
				 toUpdateList.setFaxNumber(verifiedDetail.getFaxNumber());
				 toUpdateList.setReferenceNumber(verifiedDetail.getReferenceNumber());
				 updatedVerifiedList.add(toUpdateList);
		}
		        
        List<VerifiedIndemnity> verifiedDetailLists = verifiedRepository.saveAll(verifiedDetails);
        return verifiedDetailLists;
	}


}
