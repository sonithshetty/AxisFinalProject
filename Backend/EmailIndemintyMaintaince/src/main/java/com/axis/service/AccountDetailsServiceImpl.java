package com.axis.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.exception.IdNotFoundException;
import com.axis.model.AccountDetails;
import com.axis.repository.AccountDetailsRepository;

@Service
public class AccountDetailsServiceImpl implements AccountDetailsService{

	@Autowired
	AccountDetailsRepository accountRepository;
	
	@Override
	public AccountDetails addDetails(AccountDetails accountDetails) {
		// TODO Auto-generated method stub
		return accountRepository.save(accountDetails);
	}

	@Override
	public List<AccountDetails> getAllDetails() {
		// TODO Auto-generated method stub
		return accountRepository.findAll();
	}

	@Override
	public AccountDetails getDetailsByAccountID(String accountNo) {
		// TODO Auto-generated method stub
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);
		
		if(acc.isPresent())
			return acc.get();
		else
			throw new IdNotFoundException("No such accountNo is present to get the value");
	}

	@Override
	public AccountDetails updateDetailsByAccountID(String accountNo, AccountDetails accountDetails) {
		// TODO Auto-generated method stub
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);
		
		if(acc.isPresent())
			return accountRepository.save(accountDetails);
		else
			throw new IdNotFoundException("No such accountNo is present to update the value");
	
	}

	@Override
	public String deleteDetailsByAccountID(String accountNo) {
		// TODO Auto-generated method stub
		Optional<AccountDetails> acc = accountRepository.findById(accountNo);
		
		if(acc.isPresent()) {
			accountRepository.deleteById(accountNo);
			return "Account deleted Successfully";
		}else
			throw new IdNotFoundException("No such accountNo is present to delete the value");
	
	}

}
