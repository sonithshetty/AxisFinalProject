package com.axis.service;

import com.axis.model.VerifiedIndemnity;

public interface VerifiedIndemnityService {
	VerifiedIndemnity addDetails(VerifiedIndemnity verifiedDetails);
	VerifiedIndemnity getDetailsByAccountId(String accountNo);
}
