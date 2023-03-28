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
	public IndemnityDetailsDTO addDetails(IndemnityDetailsDTO indemnityDetailsDTO) {
		// TODO Auto-generated method stub
		IndemnityDetails indemnityDetails = new IndemnityDetails();
        indemnityDetails.setAccountNo(indemnityDetailsDTO.getAccountNo());
        indemnityDetails.setName(indemnityDetailsDTO.getName());
        indemnityDetails.setEmailId(indemnityDetailsDTO.getEmailId());
        indemnityDetails.setFaxNumber(indemnityDetailsDTO.getFaxNumber());
        indemnityDetails.setReferenceNumber(indemnityDetailsDTO.getReferenceNumber());

        indemnityDetails = indemnRepository.save(indemnityDetails);

        IndemnityDetailsDTO resultDto = new IndemnityDetailsDTO();
        resultDto.setId(indemnityDetails.getId());
        resultDto.setAccountNo(indemnityDetails.getAccountNo());
        resultDto.setName(indemnityDetails.getName());
        resultDto.setEmailId(indemnityDetails.getEmailId());
        resultDto.setFaxNumber(indemnityDetails.getFaxNumber());
        resultDto.setReferenceNumber(indemnityDetails.getReferenceNumber());

        return resultDto;
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
                    indemnityDetails.getReferenceNumber(), indemnityDetails.getAccountNo());
        } else {
            throw new IdNotFoundException("No such id is present to get the value");
        }	}

	@Override
	public IndemnityDetailsDTO updateDetailsById(int id, IndemnityDetailsDTO indemnityDetailsDTO) {
		// TODO Auto-generated method stub
		Optional<IndemnityDetails> optionalIndemnityDetails = indemnRepository.findById(id);
        if (optionalIndemnityDetails.isPresent()) {
            IndemnityDetails indemnityDetails = optionalIndemnityDetails.get();
            indemnityDetails.setAccountNo(indemnityDetailsDTO.getAccountNo());
            indemnityDetails.setName(indemnityDetailsDTO.getName());
            indemnityDetails.setEmailId(indemnityDetailsDTO.getEmailId());
            indemnityDetails.setFaxNumber(indemnityDetailsDTO.getFaxNumber());
            indemnityDetails.setReferenceNumber(indemnityDetailsDTO.getReferenceNumber());
            indemnityDetails.setId(id);
            indemnityDetails = indemnRepository.save(indemnityDetails);
            return new IndemnityDetailsDTO(indemnityDetails);
        } else {
            throw new IdNotFoundException("No such id is present to update the value");
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

	
}
