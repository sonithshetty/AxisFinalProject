package com.axis.service;

import java.util.List;

import com.axis.dto.IndemnityDetailsDTO;
import com.axis.model.IndemnityDetails;

public interface IndemnityDetailsService {
//	IndemintyDetails addDetails(IndemintyDetails indemnDetails);
//	List<IndemintyDetails>  getAllDetails();
//	IndemintyDetails getDetailsById(int id);
//	IndemintyDetails updateDetailsById(int id, IndemintyDetails indemnDetails);
//	String deleteDetailsById(int id);
	
    IndemnityDetailsDTO addDetails(IndemnityDetailsDTO indemnityDetailsDTO);
    List<IndemnityDetailsDTO> getAllDetails();
    IndemnityDetailsDTO getDetailsById(int id);
    List<IndemnityDetailsDTO> getDetailsByAccountNo(String accountNo);
    IndemnityDetailsDTO updateDetailsById(int id, IndemnityDetailsDTO indemnityDetailsDTO);
    String deleteDetailsById(int id);
}
