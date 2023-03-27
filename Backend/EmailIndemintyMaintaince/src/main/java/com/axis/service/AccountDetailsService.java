package com.axis.service;

import java.util.List;

import com.axis.model.AccountDetails;

public interface AccountDetailsService{
	AccountDetails addDetails(AccountDetails accountDetails);
	List<AccountDetails> getAllDetails();
	AccountDetails getDetailsByAccountID(String accountNo);
	AccountDetails updateDetailsByAccountID(String accountNo, AccountDetails accountDetails);
	String deleteDetailsByAccountID(String accountNo);
}
