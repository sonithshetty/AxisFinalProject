package com.axis.service;

import java.util.List;

import com.axis.model.AccountDetails;

public interface AccountDetailsService{
	AccountDetails addDetails(AccountDetails accountDetails);
	List<AccountDetails> getAllDetails();
	AccountDetails getDetailsByAccountID(Long accountNo);
	AccountDetails updateDetailsByAccountID(Long accountNo, AccountDetails accountDetails);
	String deleteDetailsByAccountID(Long accountNo);
}
