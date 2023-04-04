package com.axis.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.exception.IdNotFoundException;
import com.axis.model.IndemnityDetails;
import com.axis.repository.IndemnityDetailsRepository;

@Service
public class IndemnityDetailsServiceImpl implements IndemnityDetailsService{
	
	@Autowired
	IndemnityDetailsRepository indemnRepository;

	@Override
	public List<IndemnityDetails> addDetails(List<IndemnityDetailsDTO> indemnityDetailsDTO) {
	
//		IndemnityDetails indemnityDetails = new IndemnityDetails();
//        indemnityDetails.setAccountNo(indemnityDetailsDTO.getAccountNo());
//        indemnityDetails.setName(indemnityDetailsDTO.getName());
//        indemnityDetails.setEmailId(indemnityDetailsDTO.getEmailId());
//        indemnityDetails.setFaxNumber(indemnityDetailsDTO.getFaxNumber());
//        indemnityDetails.setReferenceNumber(indemnityDetailsDTO.getReferenceNumber());
//        indemnityDetails.setVerify(false);
//        indemnityDetails = indemnRepository.save(indemnityDetails);
//        IndemnityDetailsDTO resultDto = new IndemnityDetailsDTO();
//        resultDto.setId(indemnityDetails.getId());
//        resultDto.setAccountNo(indemnityDetails.getAccountNo());
//        resultDto.setName(indemnityDetails.getName());
//        resultDto.setEmailId(indemnityDetails.getEmailId());
//        resultDto.setFaxNumber(indemnityDetails.getFaxNumber());
//        resultDto.setReferenceNumber(indemnityDetails.getReferenceNumber());
//        resultDto.setVerify(indemnityDetails.getVerify());
		
		List<IndemnityDetailsDTO> indemnityDetailsDTOList = indemnityDetailsDTO;
		List<IndemnityDetails> indemnityDetailsList = new ArrayList<IndemnityDetails>( );
		
		for (IndemnityDetailsDTO indemnityDetailsDTO2: indemnityDetailsDTOList) 
		{
			 IndemnityDetails indemnityDetails = new IndemnityDetails();
	            indemnityDetails.setId(indemnityDetailsDTO2.getId());
	            indemnityDetails.setAccountNo(indemnityDetailsDTO2.getAccountNo());
	            indemnityDetails.setName(indemnityDetailsDTO2.getName());
	            indemnityDetails.setEmailId(indemnityDetailsDTO2.getEmailId());
	            indemnityDetails.setFaxNumber(indemnityDetailsDTO2.getFaxNumber());
	            indemnityDetails.setReferenceNumber(indemnityDetailsDTO2.getReferenceNumber());
	            indemnityDetails.setVerify(false);
	            indemnityDetailsList.add(indemnityDetails);
		}
		        
        List<IndemnityDetails> indemnityDetailLists= indemnRepository.saveAll(indemnityDetailsList);
        return indemnityDetailLists;
        
	}

	@Override
	public List<IndemnityDetailsDTO> getAllDetails() {
		// TODO Auto-generated method stub
        List<IndemnityDetails> indemnityDetailsList = indemnRepository.findAll();
        List<IndemnityDetailsDTO> indemnityDetailsDTOList = new ArrayList<>();
        for (IndemnityDetails indemnityDetails : indemnityDetailsList) {
            IndemnityDetailsDTO indemnityDetailsDTO = new IndemnityDetailsDTO();
            indemnityDetailsDTO.setId(indemnityDetails.getId());
            indemnityDetailsDTO.setAccountNo(indemnityDetails.getAccountNo());
            indemnityDetailsDTO.setName(indemnityDetails.getName());
            indemnityDetailsDTO.setEmailId(indemnityDetails.getEmailId());
            indemnityDetailsDTO.setFaxNumber(indemnityDetails.getFaxNumber());
            indemnityDetailsDTO.setReferenceNumber(indemnityDetails.getReferenceNumber());
            indemnityDetailsDTO.setVerify(indemnityDetails.getVerify());
            indemnityDetailsDTOList.add(indemnityDetailsDTO);
        }
        return indemnityDetailsDTOList;
	}

	@Override
	public IndemnityDetailsDTO getDetailsById(int id) {
		// TODO Auto-generated method stub
        Optional<IndemnityDetails> optionalIndemnityDetails = indemnRepository.findById(id);
        if (optionalIndemnityDetails.isPresent()) {
            IndemnityDetails indemnityDetails = optionalIndemnityDetails.get();
            return new IndemnityDetailsDTO(indemnityDetails.getId(), indemnityDetails.getName(),
                    indemnityDetails.getEmailId(), indemnityDetails.getFaxNumber(),
                    indemnityDetails.getReferenceNumber(), indemnityDetails.getAccountNo(), indemnityDetails.getVerify());
        } else {
            throw new IdNotFoundException("No such id is present to get the value");
        }	}

	@Override
	public IndemnityDetailsDTO updateDetailsByAccountNo(int id, IndemnityDetailsDTO indemnityDetailsDTO) {
		// TODO Auto-generated method stub
		Optional<IndemnityDetails> optionalIndemnityDetails = indemnRepository.findById(id);
        if (optionalIndemnityDetails.isPresent()) {
            IndemnityDetails indemnityDetails = optionalIndemnityDetails.get();
            indemnityDetails.setName(indemnityDetailsDTO.getName());
            indemnityDetails.setEmailId(indemnityDetailsDTO.getEmailId());
            indemnityDetails.setFaxNumber(indemnityDetailsDTO.getFaxNumber());
            indemnityDetails.setReferenceNumber(indemnityDetailsDTO.getReferenceNumber());
            indemnityDetails.setVerify(indemnityDetailsDTO.getVerify());
            indemnityDetails = indemnRepository.save(indemnityDetails);
            return new IndemnityDetailsDTO(indemnityDetails);
        } else {
            throw new IdNotFoundException("No such account no is present to update the value");
        }
	}

	@Override
	public String deleteDetailsById(int id) {
		// TODO Auto-generated method stub
		Optional<IndemnityDetails> optionalIndemnityDetails = indemnRepository.findById(id);
        if (optionalIndemnityDetails.isPresent()) {
        	indemnRepository.deleteById(id);
            return "IndemnityDetails deleted Successfully";
        } else {
            throw new IdNotFoundException("No such id is present to delete the value");
        }
	}

	@Override
	public List<IndemnityDetailsDTO> getDetailsByAccountNo(String accountNo) {
		// TODO Auto-generated method stub
	            
	            List<IndemnityDetails> indemnityDetailsList = indemnRepository.findByAccountNo(accountNo);
	            List<IndemnityDetailsDTO> indemnityDetailsDTOList = new ArrayList<>();
	            for (IndemnityDetails indemnityDetails : indemnityDetailsList) {
	                IndemnityDetailsDTO indemnityDetailsDTO = new IndemnityDetailsDTO();
	                indemnityDetailsDTO.setId(indemnityDetails.getId());
	                indemnityDetailsDTO.setAccountNo(indemnityDetails.getAccountNo());
	                indemnityDetailsDTO.setName(indemnityDetails.getName());
	                indemnityDetailsDTO.setEmailId(indemnityDetails.getEmailId());
	                indemnityDetailsDTO.setFaxNumber(indemnityDetails.getFaxNumber());
	                indemnityDetailsDTO.setReferenceNumber(indemnityDetails.getReferenceNumber());
	                indemnityDetailsDTOList.add(indemnityDetailsDTO);
	            }
	            return indemnityDetailsDTOList;
	        
	}

	@Override
	public List<IndemnityDetails> getDetailsByIsVerified() {
		// TODO Auto-generated method stub
//		List<IndemnityDetailsDTO> indemnityDetailsDTOList = new ArrayList<>();
//		if(indemnityDetails.getVerify() == false) {
//			List<IndemnityDetails> indemnityDetailsList = indemnRepository.findAll();
//			
//            for (IndemnityDetails indemnityDetail : indemnityDetailsList) {
//                IndemnityDetailsDTO indemnityDetailsDTO = new IndemnityDetailsDTO();
//                indemnityDetailsDTO.setId(indemnityDetail.getId());
//                indemnityDetailsDTO.setAccountNo(indemnityDetail.getAccountNo());
//                indemnityDetailsDTO.setName(indemnityDetail.getName());
//                indemnityDetailsDTO.setEmailId(indemnityDetail.getEmailId());
//                indemnityDetailsDTO.setFaxNumber(indemnityDetail.getFaxNumber());
//                indemnityDetailsDTO.setReferenceNumber(indemnityDetail.getReferenceNumber());
//                indemnityDetailsDTOList.add(indemnityDetailsDTO);
//            }
//            
//		}
//		return indemnityDetailsDTOList;
		
		List<IndemnityDetails> indemnityDetailsList = indemnRepository.findAll();
		System.out.println(indemnityDetailsList);
		List<IndemnityDetails> indemnityDetailsDTOList = new ArrayList<>();
		for(IndemnityDetails indemnityDetail: indemnityDetailsList) {
			System.out.println(indemnityDetail.getVerify());
			if(indemnityDetail.getVerify() == false) {
				indemnityDetailsDTOList.add(indemnityDetail);
				
			}
		}
		return indemnityDetailsDTOList;
	}

}
