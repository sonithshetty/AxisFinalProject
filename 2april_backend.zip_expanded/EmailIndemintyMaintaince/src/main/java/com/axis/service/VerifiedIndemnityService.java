package com.axis.service;

import com.axis.model.VerifiedIndemnity;

public interface VerifiedIndemnityService {
	VerifiedIndemnity addVerifiedDetails(VerifiedIndemnity verifiedDetails);	//send multiple verified indemnities after verification in one click
//	List<VerifiedIndemnity> getDetailsByAccountNo(String accountNo);		//get details of all indemnities of particular account
}
