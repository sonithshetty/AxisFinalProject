package com.axis.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.IndemnityDetailsDTO;
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
	public VerifiedIndemnity addVerifiedDetails(VerifiedIndemnity verifiedDetails) {
		// TODO Auto-generated method stub
		return verifiedRepository.save(verifiedDetails);
	}

//	@Override
//	public List<VerifiedIndemnity> getDetailsByAccountNo(String accountNo) {
//		// TODO Auto-generated method stub
//		
//		 List<IndemnityDetails> indemnityDetailsList = indemnRepository.findByAccountNo(accountNo);
//         List<IndemnityDetailsDTO> indemnityDetailsDTOList = new ArrayList<>();
//         for (IndemnityDetails indemnityDetails : indemnityDetailsList) {
//             IndemnityDetailsDTO indemnityDetailsDTO = new IndemnityDetailsDTO();
//             indemnityDetailsDTO.setId(indemnityDetails.getId());
//             indemnityDetailsDTO.setAccountNo(indemnityDetails.getAccountNo());
//             indemnityDetailsDTO.setName(indemnityDetails.getName());
//             indemnityDetailsDTO.setEmailId(indemnityDetails.getEmailId());
//             indemnityDetailsDTO.setFaxNumber(indemnityDetails.getFaxNumber());
//             indemnityDetailsDTO.setReferenceNumber(indemnityDetails.getReferenceNumber());
//             indemnityDetailsDTOList.add(indemnityDetailsDTO);
//         }
//         return indemnityDetailsDTOList;
//	}
}
