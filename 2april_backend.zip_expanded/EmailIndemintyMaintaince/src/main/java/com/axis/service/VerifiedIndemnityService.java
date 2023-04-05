package com.axis.service;

import java.util.List;

import com.axis.dto.VerifiedIndemnityDTO;
import com.axis.model.IndemnityDetails;

public interface VerifiedIndemnityService {
	List<VerifiedIndemnityDTO> addVerifiedDetails(List<IndemnityDetails> indemnDetails);	//fetch and store multiple verified indemnities after verification in one click
	
	List<VerifiedIndemnityDTO> getDetailsByAccountNo(String accountNo);
	
	List<Integer> deleteVerifiedDetailsByIdList(List<Integer> ids);	//delete verified data
}
