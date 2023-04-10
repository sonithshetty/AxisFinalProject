package com.axis.service;

import java.util.List;

import com.axis.dto.VerifiedIndemnityDTO;
import com.axis.model.IndemnityDetails;
import com.axis.model.VerifiedIndemnity;

public interface VerifiedIndemnityService {
	List<VerifiedIndemnityDTO> addVerifiedDetails(List<IndemnityDetails> indemnDetails);	//fetch and store multiple verified indemnities after verification in one click
	
	List<VerifiedIndemnityDTO> getDetailsByAccountNo(String accountNo);
	
	List<VerifiedIndemnity> updateDetailsByIdList(List<VerifiedIndemnity> verifiedDetails);
	
	List<Integer> deleteVerifiedDetailsByIdList(List<Integer> ids);	//delete verified data
}
