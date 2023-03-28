package com.axis.service;

import java.util.List;

import com.axis.model.AccountDetails;

public interface AccountDetailsService{
	AccountDetails addDetails(AccountDetails accountDetails);
	List<AccountDetails> getAllDetails();
	AccountDetails getDetailsByAccountNo(String accountNo);   // inquire function
	AccountDetails updateDetailsByAccountNo(String accountNo, AccountDetails accountDetails); //modify function
	String deleteDetailsByAccountNo(String accountNo); //delete function
}
