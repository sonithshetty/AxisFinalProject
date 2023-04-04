package com.axis.service;

import java.util.List;

import com.axis.model.IndemnityDetails;
import com.axis.model.VerifiedIndemnity;

public interface VerifiedIndemnityService {
	List<VerifiedIndemnity> addVerifiedDetails(IndemnityDetails indemnDetails);	//send multiple verified indemnities after verification in one click
	String deleteVerifiedDetails(int id);	//delete verified data 
}
