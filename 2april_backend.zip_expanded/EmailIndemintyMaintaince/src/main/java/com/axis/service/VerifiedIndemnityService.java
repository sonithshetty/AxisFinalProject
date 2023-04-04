package com.axis.service;

import java.util.List;

import com.axis.dto.VerifiedIndemnityDTO;
import com.axis.model.IndemnityDetails;
import com.axis.model.VerifiedIndemnity;

public interface VerifiedIndemnityService {
	List<VerifiedIndemnityDTO> addVerifiedDetails(List<IndemnityDetails> indemnDetails);	//fetch and store multiple verified indemnities after verification in one click
	String deleteVerifiedDetails(int id);	//delete verified data
}
